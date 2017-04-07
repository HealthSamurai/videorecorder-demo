variable "profile"           { default = "aidbox" }
variable "prefix"            { default = "videorecorder" }
variable "region"            { default = "us-west-1" }
variable "availability_zone" { default = "us-west-1a"}
variable "ami"               { default = "ami-3b6b205b" }
variable "aws_key"           { default = "aidbox" }

provider "aws" {
  profile = "${var.profile}"
  region = "${var.region}"
}

resource "aws_security_group" "main" {
  name = "${var.prefix}-main"
  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port = 80
    to_port = 80
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port = 443
    to_port = 443
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags { Name = "${var.prefix}-main" }
}

resource "aws_instance" "main" {
  ami = "${var.ami}"
  key_name = "${var.aws_key}"
  security_groups = ["${aws_security_group.main.name}"]
  instance_type = "t2.micro"

  availability_zone = "${var.availability_zone}"

  associate_public_ip_address = true
   root_block_device = { volume_size = 300 }
  tags = {
    Name = "${var.prefix}-all-in-one"
  }

  connection {
    user = "ubuntu"
  }

  provisioner "file" {
    destination = "/home/ubuntu/condo/self.edn"
    content = "${file("${path.module}/self.edn")}"
  }

  provisioner "remote-exec" {
    inline = [ "sudo docker run -e DOCKER_API_VERSION=1.24 -v /var/run/docker.sock:/var/run/docker.sock -v /home/ubuntu/condo/:/var/lib/condo prepor/condo:0.11.dev execute /var/lib/condo/self.edn"]
  }
}

data "template_file" "role" {
  template = "${file("${path.module}/role.edn")}"
}

resource "null_resource" "files" {
  triggers {
    nodes = "${aws_instance.main.id}"
    role = "${data.template_file.role.rendered}"
  }

  connection {
    host = "${aws_instance.main.public_ip}"
    user = "ubuntu"
  }

  provisioner "file" {
    destination = "/home/ubuntu/condo/role.edn"
    content = "${data.template_file.role.rendered}"
  }
}
