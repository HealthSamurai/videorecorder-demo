# FHIR Search Tutorial

Searching for resources is fundamental to the mechanics of
FHIR. Search operations traverse through an existing set of resources
filtering by parameters supplied to the search operation. The text
below describes the FHIR search framework, starting with simple cases
moving to the more complex. Implementers need only implement the
amount of complexity that they require for their implementations.

## Basics

FHIR resources can be created, read, updated, and deleted.

To create a resource, an HTTP **POST** command is used. A resource will be created with generated id.
To create a resource with specified id, an HTTP **PUT** command is used. 

Let's create an active Patient resource for _Ruben Crosby_, male, born in 1981-09-16, with specified id _example-patient123_.

```http
PUT /fhir/Patient/example-patient123
Content-Type: application/json

{
	"resourceType": "Patient",
  "id": "example-patient123",
	"active": true,
	"name": [{
			"use": "official",
			"given": [
				"Ruben"
			],
			"family": [
				"Crosby"
			]
		}
	],	
	"birthDate": "1981-09-16",
	"gender": "male"
}
```

To read a resource, an HTTP **GET** command is used.

```http
GET /fhir/Patient/example-patient123
```

To update a resource, an HTTP **PUT** command is used. If a resource does not exist on the server, it will be created.

Let's update the resource, so that our patient _Ruben Crosby_ had an identifier SSN 000000681.

```http
PUT /fhir/Patient/example-patient123
Content-Type: application/json

{
	"resourceType": "Patient",
  "id": "example-patient123",
	"active": true,
	"name": [{
			"use": "official",
			"given": [
				"Ruben"
			],
			"family": [
				"Crosby"
			]
		}
	],	
	"birthDate": "1981-09-16",
	"identifier": [{
			"use": "usual",
			"type": {
				"coding": [{
						"code": "SS",
						"system": "http://hl7.org/fhir/v2/0203"
					}
				]
			},
			"value": "000000681",
			"system": "http://hl7.org/fhir/sid/us-ssn"
		}
	],
	"gender": "male"
}
```

To delete a resource, an HTTP **DELETE** command is used.

```http
DELETE /fhir/Patient/example-patient123
```

Let's try to read the resource to check that it is gone. This search below should return 410 Gone.

```http
GET /fhir/Patient/example-patient123
```

To retrieve the change history for a particular resource, an HTTP **GET** command with **_history** is used.
The return content is a Bundle with type set to history containing the specified version history, sorted with oldest versions last, and including deleted resources.

```http
GET /fhir/Patient/example-patient123/_history
```

## Introduction

Each FHIR resource has a defined set of parameters. E.g., the Patient resource has such parameters as **name** (A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text), **birthDate** (The patient's date of birth), **gender** (Gender of the patient), **given** (A portion of the given name of the patient), and so on (for the full list of parameters for this resource, see the [page](http://hl7.org/fhir/2016Sep/patient.html)).

Let's add a patient.

```http
PUT /fhir/Patient/example-patient1
Content-Type: application/json

{
  "id": "example-patient1",
  "name": [
    {
      "use": "official",
      "given": [
        "Adam"
      ],
      "family": [
        "Carver"
      ]
      }
  ],
  "address": [
    {
      "use": "home",
      "city": "San Diego",
      "line": [
        "2553 Dui. St."],
      "state": "TN",
            "postalCode": "81341"
    }
  ],
  "birthDate": "1963-05-06",
  "resourceType": "Patient",
  "extension": [   
    {
      "url": "http://hl7.org/fhir/StructureDefinition/us-core-ethnicity",
      "valueCodeableConcept": {
        "coding": [
          {
            "code": "2135-2",
            "system": "http://hl7.org/fhir/v3/Ethnicity"
          }
        ]
      }
    },      
    {
      "url": "http://hl7.org/fhir/StructureDefinition/us-core-race",
      "valueCodeableConcept": {
        "coding": [
          {
            "code": "2108-9",
            "system": "http://hl7.org/fhir/v3/Race"
          }
        ]
      }
    }   
  ],
  "active": true,
  "communication": [
    {
      "language": {
        "coding": [
          {
            "code": "en",
            "system": "urn:ietf:bcp:47"
          }
        ]
      },
      "preferred": true
    }
  ],
  "identifier": [
    {
      "use": "usual",
      "type": {
        "coding": [
          {
            "code": "SS",
            "system": "http://hl7.org/fhir/v2/0203"
          }
        ]
      },
      "value": "000000831",
      "system": "http://hl7.org/fhir/sid/us-ssn"
    }
  ],
  "telecom": [
    {
      "use": "mobile",
      "rank": 1,
      "value": "122.108.2548",
      "system": "phone"
    },
    {
      "rank": 1,
      "value": "Adam.Carver@testpatient.com",
      "system": "email"
    }
  ],
  "gender": "male",
  "maritalStatus": {
    "text": "Married",
    "coding": [
      {
        "code": "M",
        "system": "http://hl7.org/fhir/v3/MaritalStatus",
        "display":"Married"
      }
    ]
  }
}
```

In the simplest case, a search is executed by performing a **GET** operation in the RESTful framework:

```GET [base]/[type]?parameter_name=value```

, where [base] is FHIR server URL, e.g. http://frontend.dev.aidbox.io/fhir 

and [type] is the resource type starting with the capital letter, e.g. Patient, Encounter, Observation, etc.

Let's search for patients with name Carver:

```http
GET /fhir/Patient?name=carver
```

The server determines which of the set of resources it serves meet the specific criteria, and returns the results in the HTTP response as a bundle which includes the resources that are the results of the search.

Let's try other Patient resource parameters.

Search for patients with **given** name Adam:

```http
GET /fhir/Patient?given=adam
```

Search for patients with **gender** male:

```http
GET /fhir/Patient?gender=male
```

Search for patients who was born in the 1963 year (parameter **birthdate**):

```http
GET /fhir/Patient?birthdate=1963
```

Note that parameter is case sensitive: /fhir/Patient?birthDate=1963 not working.

If you need to specify several criteria, use the **&** character to join other parameters to the request.

```GET [base]/[type]?parameter1=value1&parameter2=value2&parameter3=value3```

Let's search for patients with **given** name Adam and **family** name Carver:

```http
GET /fhir/Patient?given=Adam&family=Carver
```

## Standard Parameters

### Parameters for all resources

Besides parameters defined for each resource, there is a set of parameters common for all types of resources: 
* _content, 
* _id, 
* _lastUpdated, 
* _profile, 
* _query, 
* _security, 
* _tag,
* _text,
* _filter.

The search parameter **_id** refers to the logical id of the resource, and can be used when
a resource type is specified in the request:

```http
GET /fhir/Patient?_id=example-patient1
```

This search finds the patient resource with the given id (there can only be one resource
for a given id). Functionally, this is equivalent to a simple read operation:

```http
GET /fhir/Patient/example-patient1
```

However, the search with parameter **_id** returns a bundle with the requested resource,
instead of just the resource itself. 

The search parameter **_lastUpdated** can be used to select resources based on the last time
they were changed.

Let's add a bundle with a Patient, Condition and Observations. Bundles are added using an HTTP **POST** command to the FHIR server URL.

```http
POST /fhir/
Content-Type: application/json

{
	"resourceType": "Bundle",
	"type": "batch",
	"entry": [{
			"fullUrl": "http://diabetes.dev.aidbox.io/fhir/Patient/example-patient2",
			"resource": {
   "id": "example-patient2",
   "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Patient Eve Ellis</b></p></div>"
          },
  "address": [
    {
      "use": "home",
      "city": "Coral Springs",
      "line": [
        "P.O. Box 174, 7637 Nec Road"],
      "state": "TN",
            "postalCode": "22882"
    }
  ],
  "name": [
    {
      "use": "official",
      "given": [
        "Eve"
      ],
      "family": [
        "Ellis"
      ]
      }
  ],
  "birthDate": "1985-11-19",
  "resourceType": "Patient",
  "extension": [   
    {
      "url": "http://hl7.org/fhir/StructureDefinition/us-core-ethnicity",
      "valueCodeableConcept": {
        "coding": [
          {
            "code": "2135-2",
            "system": "http://hl7.org/fhir/v3/Ethnicity"
          }
        ]
      }
    },      
    {
      "url": "http://hl7.org/fhir/StructureDefinition/us-core-race",
      "valueCodeableConcept": {
        "coding": [
          {
            "code": "2108-9",
            "system": "http://hl7.org/fhir/v3/Race"
          }
        ]
      }
    }   
  ],
  "active": true,
  "communication": [
    {
      "language": {
        "coding": [
          {
            "code": "en",
            "system": "urn:ietf:bcp:47"
          }
        ]
      },
      "preferred": true
    }
  ],
  "identifier": [
    {
      "use": "usual",
      "type": {
        "coding": [
          {
            "code": "SS",
            "system": "http://hl7.org/fhir/v2/0203"
          }
        ]
      },
      "value": "000000491",
      "system": "http://hl7.org/fhir/sid/us-ssn"
    }
  ],
  "telecom": [
    {
      "use": "mobile",
      "rank": 1,
      "value": "122.108.2548",
      "system": "phone"
    },
    {
      "rank": 1,
      "value": "Eve.Ellis@testpatient.com",
      "system": "email"
    }
  ],
  "gender": "female",
  "maritalStatus": {
    "text": "Married",
    "coding": [
      {
        "code": "M",
        "system": "http://hl7.org/fhir/v3/MaritalStatus",
        "display":"Married"
      }
    ]
  }
},
			"request": {
				"method": "PUT",
				"url": "/Patient/example-patient2"
			}
		}, {
			"fullUrl": "http://diabetes.dev.aidbox.io/fhir/Condition/example-condition2",
			"resource": {
      "id": "example-condition2",
      "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Diagnosis E11.29 UNSPECIFIED ABNORMALITIES OF BREATHING</b></p></div>"
          },
      "meta": {
          "tag" : [{
                          "system": "http://acme.org/codes",
                          "code": "needs-review"
                        }]          
        },
				"category": {
					"coding": [{
							"code": "diagnosis",
							"system": "http://hl7.org/fhir/condition-category",
							"display": "Diagnosis"
						}
					]
				},
				"clinicalStatus": "active",
				"dateRecorded": "2016-11-11T20:42:59.847Z",
				"resourceType": "Condition",
				"code": {
					"coding": [{
							"code": "E11.29",
							"system": "http://hl7.org/fhir/sid/icd-10",
							"display": "UNSPECIFIED ABNORMALITIES OF BREATHING"
						}
					]
				},
				"verificationStatus": "confirmed",
				"subject": {
					"reference": "http://diabetes.dev.aidbox.io/fhir/Patient/example-patient2"
				}
			},
			"request": {
				"method": "PUT",
				"url": "/Condition/example-condition2"
			}
		}, {
			"fullUrl": "http://diabetes.dev.aidbox.io/fhir/Observation/obs-BMI",
			"resource": {
      "id": "example-observation-bmi2",
      "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>BMI 30.8 kg/m2</b></p></div>"
          },
				"code": {
					"text": "Body mass index (BMI) [Ratio]",
					"coding": [{
							"code": "39156-5",
							"system": "http://loinc.org",
							"display": "Body mass index (BMI) [Ratio]"
						}
					]
				},
		"effectiveDateTime" : "2017-02-27T19:34:35.710Z",
	"issued": "2017-03-07T19:34:35.710Z",	
	"subject": {
					"reference": "http://diabetes.dev.aidbox.io/fhir/Patient/example-patient2"
				},
				"resourceType": "Observation",
				"valueQuantity": {
					"value": 30.8,
					"unit": "kg/m2",
					"system": "http://unitsofmeasure.org",
					"code": "kg/m2"
				}
			},
			"request": {
				"method": "PUT",
				"url": "/Observation/example-observation-bmi2"
			}
		}, {
			"fullUrl": "http://diabetes.dev.aidbox.io/fhir/Observation/obs-HbA1c",
			"resource": {
         "id": "example-observation-a1c2",        
				"resourceType": "Observation",
				"text": {
					"status": "generated",
					"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">HbA1c 14.9 g/dL</div>"
				},
				"status": "final",
				"code": {
					"text": "Hemoglobin A1c [Mass/​volume] in Blood",
					"coding": [{
							"system": "http://loinc.org",
							"code": "41995-2",
							"display": "Hemoglobin A1c [Mass/​volume] in Blood"
						}
					]
				},
				"subject": {
					"reference": "http://diabetes.dev.aidbox.io/fhir/Patient/example-patient2"
				},
				"effectiveDateTime" : "2017-03-03T19:34:35.710Z",
				"issued": "2017-03-07T19:34:35.710Z",
				"valueQuantity": {
					"value": 14.9,
					"unit": "g/dL",
					"system": "http://unitsofmeasure.org",
					"code": "g/dL"
				},				
				"referenceRange": [{
						"low": {
							"value": 7.5,
							"unit": "g/dL",
							"system": "http://unitsofmeasure.org",
							"code": "g/dL"
						},
						"high": {
							"value": 10,
							"unit": "g/dL",
							"system": "http://unitsofmeasure.org",
							"code": "g/dL"
						}
					}
				]
			},
			"request": {
				"method": "PUT",
				"url": "/Observation/example-observation-a1c2"
			}
		}, {
			"fullUrl": "http://diabetes.dev.aidbox.io/fhir/DiagnosticReport/example-diagnosticreport2",
			"resource": {
          "resourceType": "DiagnosticReport",
          "id": "example-diagnosticreport2",
          "meta": {
          "profile": ["http://hl7.org/fhir/StructureDefinition/lipid"]
        },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b> DiagnosticReport</p></div>"
          },         
          "identifier": [
            {
              "use": "official",
              "system": "http://www.bmc.nl/zorgportal/identifiers/reports",
              "value": "nr1239044"
            }
          ],
          "status": "final",
          "category": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "252275004",
                "display": "Haematology test"
              },
              {
                "system": "http://hl7.org/fhir/v2/0074",
                "code": "HM"
              }
            ]
          },
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "58410-2",
                "display": "Complete blood count (hemogram) panel - Blood by Automated count"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example-patient2"
          },
          "effectiveDateTime": "2017-03-02",
          "issued": "2017-03-02T19:32:52+01:00",
          "performer": [
            {
              "reference": "Organization/hl7",
              "display": "Burgers University Medical Centre"
            }
          ],          
          "result": [
            {
              "reference": "Observation/example-observation-a1c2"
            },
            {
              "reference": "Observation/example-observation-bmi2"
            }           
          ],
          "conclusion": "Core lab"
        },
			"request": {
				"method": "PUT",
				"url": "/DiagnosticReport/example-diagnosticreport2"
			}
		}
	]
}
```

Now, let's search for Observations last updated after 2017-03-07:

```http
GET /fhir/Observation?_lastUpdated=gt2017-03-07
```

This search finds any observations changed since 7-March 2017.

### Parameters for each resource

In addition to the _id parameter which exists for all resources, each FHIR resource
type defines its own set of search parameters with their names, types, and meanings.
These search parameters are on the same page as the resource definitions, and are
also published as part of the standard conformance statement (XML or JSON).

In general, the defined search parameters correspond to a single element in the resource,
but this is not required, and some search parameters refer to the same type of element in
multiple places, or refer to derived values.

Some search parameters defined by resources are associated with more than one path in
a resource. This means that the search parameter matches if any of the paths contain
matching content. If a path matches, the whole resource is returned in the search results.
The client may have to examine the resource to determine which path contains the match.

Servers are not required to implement any of the standard search parameters (except for
the _id parameter described above), and may define their own parameters.

### Search Parameter Types

Each search parameter is defined by a type that specifies how the search parameter behaves.
These are the defined parameter types:

Type | Description
--- | ---
number | Search parameter SHALL be a number (a whole number, or a decimal).
date | Search parameter is on a date/time. The date format is the standard XML format, though other formats may be supported.
string | Search parameter is a simple string, like a name part. Search is case-insensitive and accent-insensitive. May match just the start of a string. String parameters may contain spaces.
token | Search parameter on a coded element or identifier. May be used to search through the text, displayname, code and code/codesystem (for codes) and label, system and key (for identifier). Its value is either a string or a pair of namespace and value, separated by a \"|\", depending on the modifier used.
reference | A reference to another resource.
composite | A composite search parameter that combines a search on two values together.
quantity | A search parameter that searches on a quantity.
uri | A search parameter that searches on a URI (RFC 3986).

The search parameters can also append \"modifiers\" that control their behavior. The kinds of
modifiers that available is dependent on the type of parameter being modified.

### Modifiers

Parameters are defined per resource. Parameter names may specify a modifier as a suffix.
The modifiers are separated from the parameter name by a colon. Modifiers are:

* For all parameters (except combination): :missing; e.g. gender:missing=true (or false).
Searching for gender:missing=true will return all the resources that don't have a value
for the gender parameter (which usually equates to not having the relevant element in
the resource). Searching for gender:missing=false will return all the resources that have
a value for the gender parameter.
* For string: :exact (the match needs to be exact, no partial matches, case sensitive and
accent-sensitive), or :contains (case insensitive and accent-insensitive, partial match
at start or end), instead of the default behavior (case insensitive and accent-insensitive,
partial matches at the end of the string).
* For token: :text (the match does a partial searches on the text portion of a CodeableConcept
or the display portion of a Coding), instead of the default search which uses codes.
Other defined modifiers are :in, :below, :above and :not-in which are described below.
* For reference: :[type] where [type] is the name of a type of resource
* For uri: :below, :above indicate that instead of an exact match, either the search term
left matches the value, or vice-versa.

Server SHALL reject any search request that contains is suffixed by a modifier that the
server does not support for that parameter. For example, if the server supports the name
search param, but not the :exact modifier on the name, it should reject a search with
the parameter name:exact=Bill, using an HTTP 400 error with an OperationOutcome with
a clear error message.

### Prefixes

For the ordered parameter types of number, date, and quantity, a prefix to the parameter
value may be used to control the nature of the matching. To avoid URL escaping and visual
confusion, the following prefixes are used:

Prefix | Value | Range
--- | --- | ---
eq| the value for the parameter in the resource is equal to the provided value	| the range of the search value fully contains the range of the target value
ne| the value for the parameter in the resource is not equal to the provided value| the range of the search value does not fully contain the range of the target value
gt| the value for the parameter in the resource is greater than the provided value| the range above the search value intersects (i.e. overlaps) with the range of the target value
lt| the value for the parameter in the resource is less than the provided value| the range below the search value intersects (i.e. overlaps) with the range of the target value
ge| the value for the parameter in the resource is greater or equal to the provided value| the range above the search value intersects (i.e. overlaps) with the range of the target value, or the range of the search value fully contains the range of the target value
le| the value for the parameter in the resource is less or equal to the provided value| the range below the search value intersects (i.e. overlaps) with the range of the target value or the range of the search value fully contains the range of the target value
sa| the value for the parameter in the resource starts after the provided value| the range of the search value does not overlap with the range of the target value, and the range above the search value contains the range of the target value
eb| the value for the parameter in the resource ends before the provided value| the range of the search value does overlap not with the range of the target value, and the range below the search value contains the range of the target value
ap| the value for the parameter in the resource is approximately the same to the provided value.  |



Prefix | Value | Range
--- | --- | ---
range of the value	| The limits implied by the precision of the value	| The number 2.0 has a range of 1.95 to 2.05. The date 2015-08-12 has a range from 00:00 to 00:00 exclusive.
range below the value	| Up to the specified value	| The range below 2.0 includes any value less or equal to <2.00000000000000000000. The range before 2015-08-12T05:23:45 includes any time up to 2015-08-12T05:23:45.000000000000000.
range above the value	| The specified value and up	| The range above 2.0 includes any value greater or equal to <2.00000000000000000000. The range after 2015-08-12T05:23:45 includes any time after 2015-08-12T05:23:45.000000000000000.


### number

Searching on a simple numerical value in a resource. Examples:

Parameter | Result
--- | ---
[parameter]=100	| Values that equal 100, to 3 significant figures precision, so range [99.5 ... 100.5)
[parameter]=100.00	| Values that equal 100, to 5 significant figures precision, so range [99.995 ... 100.005). Whole numbers also equal 100.00, but not 100.01
[parameter]=lt100	| Values that are less than 100
[parameter]=le100	| Values that are less or equal to 100
[parameter]=gt100	| Values that are greater than 100
[parameter]=ge100	| Values that are greater or equal to 100
[parameter]=ne100	| Values that are not equal to 100

Note: Uncertainty does not factor in evaluations. The precision of the numbers is considered
arbitrarily high. (The way search parameters operate in resources is not the same as whether
two numbers are equal to each other in a mathematical sense).

Before searching, let's add several resources.

```http
POST /fhir/
Content-Type: application/json

{
	"resourceType": "Bundle",
	"type": "batch",
	"entry": [{
			"fullUrl": "http://diabetes.dev.aidbox.io/fhir/Encounter/example-encounter2",
			"resource": {
				"resourceType": "Encounter",
				"id": "example-encounter2",
				"text": {
					"status": "generated",
					"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>identifier</b>: v6751 (OFFICIAL)</p><p><b>status</b>: finished</p><p><b>class</b>: ambulatory (Details: http://hl7.org/fhir/v3/ActCode code AMB = 'ambulatory', stated as 'ambulatory')</p><p><b>type</b>: Patient-initiated encounter <span>(Details : {SNOMED CT code '270427003' = 'Patient-initiated encounter (procedure)', given as 'Patient-initiated encounter'})</span></p><p><b>priority</b>: Non-urgent ear, nose and throat admission <span>(Details : {SNOMED CT code '103391001' = 'Urgency (qualifier value)', given as 'Non-urgent ear, nose and throat admission'})</span></p><p><b>patient</b>: <a>P. van de Heuvel</a></p><h3>Participants</h3><table><tr><td>-</td><td><b>Individual</b></td></tr><tr><td>*</td><td><a>E.M. van den Broek</a></td></tr></table><p><b>length</b>: 90 min<span> (Details: http://unitsofmeasure.org code min = 'min')</span></p><p><b>reason</b>: Retropharyngeal abscess <span>(Details : {SNOMED CT code '18099001' = 'Retropharyngeal abscess', given as 'Retropharyngeal abscess'})</span></p><h3>Hospitalizations</h3><table><tr><td>-</td><td><b>PreAdmissionIdentifier</b></td><td><b>AdmitSource</b></td><td><b>DischargeDisposition</b></td></tr><tr><td>*</td><td>93042 (OFFICIAL)</td><td>Referral by physician <span>(Details : {SNOMED CT code '305956004' = 'Referral by physician (procedure)', given as 'Referral by physician'})</span></td><td>Discharge to home <span>(Details : {SNOMED CT code '306689006' = 'Discharge to home (procedure)', given as 'Discharge to home'})</span></td></tr></table><p><b>serviceProvider</b>: <a>Organization/hl7</a></p></div>"
				},
				"identifier": [{
						"use": "official",
						"system": "http://www.bmc.nl/zorgportal/identifiers/encounters",
						"value": "v6751"
					}
				],
				"status": "finished",
				"class": {
					"system": "http://hl7.org/fhir/v3/ActCode",
					"code": "AMB",
					"display": "ambulatory"
				},
				"type": [{
						"coding": [{
								"system": "http://snomed.info/sct",
								"code": "270427003",
								"display": "Patient-initiated encounter"
							}
						]
					}
				],
				"priority": {
					"coding": [{
							"system": "http://snomed.info/sct",
							"code": "103391001",
							"display": "Non-urgent ear, nose and throat admission"
						}
					]
				},
				"patient": {
					"reference": "Patient/example-patient2"
				},
				"length": {
					"value": 90,
					"unit": "day",
					"system": "http://unitsofmeasure.org",
					"code": "d"
				},
				"reason": [{
						"extension": [{
								"url": "http://hl7.org/fhir/StructureDefinition/encounter-primaryDiagnosis",
								"valuePositiveInt": 1
							}
						],
						"coding": [{
								"system": "http://snomed.info/sct",
								"code": "18099001",
								"display": "Retropharyngeal abscess"
							}
						]
					}
				],
				"hospitalization": {
					"preAdmissionIdentifier": {
						"use": "official",
						"system": "http://www.bmc.nl/zorgportal/identifiers/pre-admissions",
						"value": "93042"
					},
					"admitSource": {
						"coding": [{
								"system": "http://snomed.info/sct",
								"code": "305956004",
								"display": "Referral by physician"
							}
						]
					},
					"dischargeDisposition": {
						"coding": [{
								"system": "http://snomed.info/sct",
								"code": "306689006",
								"display": "Discharge to home"
							}
						]
					}
				},
				"serviceProvider": {
					"reference": "Organization/hl7"
				}
			},
			"request": {
				"method": "PUT",
				"url": "/Encounter/example-encounter2"
			}
		}, {
			"fullUrl": "http://diabetes.dev.aidbox.io/fhir/Encounter/example-encounter3",
			"resource": {
				"resourceType": "Encounter",
				"id": "example-encounter3",
				"text": {
					"status": "generated",
					"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f002</p><p><b>identifier</b>: v3251 (OFFICIAL)</p><p><b>status</b>: finished</p><p><b>class</b>: ambulatory (Details: http://hl7.org/fhir/v3/ActCode code AMB = 'ambulatory', stated as 'ambulatory')</p><p><b>type</b>: Patient-initiated encounter <span>(Details : {SNOMED CT code '270427003' = 'Patient-initiated encounter (procedure)', given as 'Patient-initiated encounter'})</span></p><p><b>priority</b>: Urgent <span>(Details : {SNOMED CT code '103391001' = 'Urgency (qualifier value)', given as 'Urgent'})</span></p><p><b>patient</b>: <a>P. van de Heuvel</a></p><h3>Participants</h3><table><tr><td>-</td><td><b>Individual</b></td></tr><tr><td>*</td><td><a>M.I.M Versteegh</a></td></tr></table><p><b>length</b>: 140 min<span> (Details: http://unitsofmeasure.org code min = 'min')</span></p><p><b>reason</b>: Partial lobectomy of lung <span>(Details : {SNOMED CT code '34068001' = 'Heart valve replacement (procedure)', given as 'Partial lobectomy of lung'})</span></p><h3>Hospitalizations</h3><table><tr><td>-</td><td><b>PreAdmissionIdentifier</b></td><td><b>AdmitSource</b></td><td><b>DischargeDisposition</b></td></tr><tr><td>*</td><td>98682 (OFFICIAL)</td><td>Referral by radiologist <span>(Details : {SNOMED CT code '305997006' = 'Referral by radiologist (procedure)', given as 'Referral by radiologist'})</span></td><td>Discharge to home <span>(Details : {SNOMED CT code '306689006' = 'Discharge to home (procedure)', given as 'Discharge to home'})</span></td></tr></table><p><b>serviceProvider</b>: <a>BMC</a></p></div>"
				},
				"identifier": [{
						"use": "official",
						"system": "http://www.bmc.nl/zorgportal/identifiers/encounters",
						"value": "v3251"
					}
				],
				"status": "finished",
				"class": {
					"system": "http://hl7.org/fhir/v3/ActCode",
					"code": "AMB",
					"display": "ambulatory"
				},
				"type": [{
						"coding": [{
								"system": "http://snomed.info/sct",
								"code": "270427003",
								"display": "Patient-initiated encounter"
							}
						]
					}
				],
				"priority": {
					"coding": [{
							"system": "http://snomed.info/sct",
							"code": "103391001",
							"display": "Urgent"
						}
					]
				},
				"patient": {
					"reference": "Patient/example-patient3"
				},
				"participant": [{
						"individual": {
							"display": "M.I.M Versteegh"
						}
					}
				],
				"length": {
					"value": 12,
					"unit": "day",
					"system": "http://unitsofmeasure.org",
					"code": "d"
				},
				"reason": [{
						"coding": [{
								"system": "http://snomed.info/sct",
								"code": "34068001",
								"display": "Partial lobectomy of lung"
							}
						]
					}
				],
				"hospitalization": {
					"preAdmissionIdentifier": {
						"use": "official",
						"system": "http://www.bmc.nl/zorgportal/identifiers/pre-admissions",
						"value": "98682"
					},
					"admitSource": {
						"coding": [{
								"system": "http://snomed.info/sct",
								"code": "305997006",
								"display": "Referral by radiologist"
							}
						]
					},
					"dischargeDisposition": {
						"coding": [{
								"system": "http://snomed.info/sct",
								"code": "306689006",
								"display": "Discharge to home"
							}
						]
					}
				},
				"serviceProvider": {
					"reference": "Organization/hl7",
					"display": "BMC"
				}
			},
			"request": {
				"method": "PUT",
				"url": "/Encounter/example-encounter3"
			}
		}
	]
}
```

Search for all the encounters longer than 20 days

```http
GET /fhir/Encounter?length=gt20
```

### date

A date parameter searches on a date/time or period. As is usual for date/time related functionality, while the concepts are relatively straight-forward, there are a number of subtleties involved in ensuring consistent behavior.

The date parameter format is yyyy-mm-ddThh:mm:ss[Z|(+|-)hh:mm] (the standard XML format).

Technically, this is any of the date, dateTime, and instant data types; e.g. Any degree of precision can be provided, but it SHALL be populated from the left (e.g. can't specify a month without a year), except that the minutes SHALL be present if an hour is present, and you SHOULD provide a time zone if the time part is present. Note: Time can consist of hours and minutes with no seconds, unlike the XML Schema dateTime type. Some user agents may escape the : characters in the URL, and servers SHALL handle this correctly.

Date parameters may be used with the following data types:

Parameter | Result
--- | ---
date | 	The range of the value is the day, month, or year as specified
dateTime | 	The range of the value as defined above; e.g. For example, the date 2013-01-10 specifies all the time from 00:00 on 10-Jan 2013 to immediately before 00:00 on 11-Jan 2013
instant | 	An instant is considered a fixed point in time with an interval smaller than the precision of the system, i.e. an interval with an effective width of 0
Period | 	Explicit, though the upper or lower bound may not actually be specified in resources.
Timing | 	the specified scheduling details are ignored and only the outer limits matter. For instance, a schedule that specifies every second day between 31-Jan 2013 and 24-Mar 2013 includes 1-Feb 2013, even though that is on an odd day that is not specified by the period. This is to keep the server load processing queries reasonable.

Implicitly, a missing lower boundary is "less than" any actual date. A missing upper boundary is "greater than" any actual date. The use of the prefixes:

Parameter | Result
--- | ---
[parameter]=eq2013-01-14	 | matches 2013-01-14T00:00 (obviously) and also 2013-01-14T10:00 but not 2013-01-15T00:00
[parameter]=ne2013-01-14	 | matches 2013-01-15T00:00 but not 2013-01-14T00:00 or 2013-01-14T10:00
[parameter]=lt2013-01-14T10:00	 | Includes the time 2013-01-14, because it includes the part of 14-Jan 2013 before 10am
[parameter]=gt2013-01-14T10:00	 | Includes the time 2013-01-14, because it includes the part of 14-Jan 2013 after 10am
[parameter]=ge2013-03-14	 | Includes a period "from 21-Jan 2013 onwards", because that period may include times after 14-Mar 2013

Other notes:

* When the date parameter is not fully specified, matches against it are based on the behavior of intervals, where:
  * Dates with only the year specified are equivalent to an interval that starts at the first instant of January 1st to the last instant of December 31st, e.g. 2000 is equivalent to an interval of [2000-01-01T00:00, 2000-12-31T23:59].
  * Dates with the year and month are equivalent to an interval that starts at the first instant of the first day of the month and ends on the last instant of the last day of the month, e.g. 2000-04 is equivalent to an interval of [2000-04-01T00:00, 2000-04-30T23:59].
* Where possible, the system should correct for timezones when performing queries. Dates do not have time zones, and time zones should not be considered. Where both search parameters and resource element date times do not have time zones, the servers local time zone should be assumed.

To search for all observations that occurred from 2017-03-01:

```http
GET /fhir/Observation?date=ge2017-03-01
```

### string

For a simple string search, a string parameter serves as the input for a case- and accent-insensitive search against sequences of characters. By default, a field matches a string query if the value of the field equals or starts with the supplied parameter value, after both have been normalized by case and accent. The :contains modifier returns results that include the supplied parameter value anywhere within the field being searched. The :exact modifier returns results that match the entire supplied parameter, including casing and accents.

Let's add several patients.

```http
POST /fhir/
Content-Type: application/json

{
	"resourceType": "Bundle",
	"type": "batch",
	"entry": [{
			"fullUrl": "http://diabetes.dev.aidbox.io/fhir/Patient/example-patient3",
			"resource": {
      "id": "example-patient3",
				"address": [{
						"use": "home",
						"city": "Edison",
						"line": [
							"1163 Et St."],
						"state": "TN",
						"postalCode": "28177"
					}
				],
				"name": [{
						"use": "official",
						"given": [
							"Evelyn"
						],
						"family": [
							"Lynch"
						]
					}
				],
				"birthDate": "2013-06-08",
				"resourceType": "Patient",
				"extension": [{
						"url": "http://hl7.org/fhir/StructureDefinition/us-core-ethnicity",
						"valueCodeableConcept": {
							"coding": [{
									"code": "2135-2",
									"system": "http://hl7.org/fhir/v3/Ethnicity"
								}
							]
						}
					}, {
						"url": "http://hl7.org/fhir/StructureDefinition/us-core-race",
						"valueCodeableConcept": {
							"coding": [{
									"code": "2108-9",
									"system": "http://hl7.org/fhir/v3/Race"
								}
							]
						}
					}
				],
				"active": true,
				"communication": [{
						"language": {
							"coding": [{
									"code": "en",
									"system": "urn:ietf:bcp:47"
								}
							]
						},
						"preferred": true
					}
				],
				"identifier": [{
						"use": "usual",
						"type": {
							"coding": [{
									"code": "SS",
									"system": "http://hl7.org/fhir/v2/0203"
								}
							]
						},
						"value": "000000917",
						"system": "http://hl7.org/fhir/sid/us-ssn"
					}
				],
				"telecom": [{
						"use": "mobile",
						"rank": 1,
						"value": "122.108.2548",
						"system": "phone"
					}, {
						"rank": 1,
						"value": "Evelyn.Lynch@testpatient.com",
						"system": "email"
					}
				],
				"gender": "female",
				"maritalStatus": {
					"text": "Married",
					"coding": [{
							"code": "M",
							"system": "http://hl7.org/fhir/v3/MaritalStatus",
							"display": "Married"
						}
					]
				}
			},
			"request": {
				"method": "PUT",
				"url": "/Patient/example-patient3"
			}
		}, {
			"fullUrl": "http://diabetes.dev.aidbox.io/fhir/Patient/example-patient4",
			"resource": {
      "id": "example-patient4",
				"address": [{
						"use": "home",
						"city": "Norfolk",
						"line": [
							"6078 Morbi Avenue"],
						"state": "TN",
						"postalCode": "81975"
					}
				],
				"name": [{
						"use": "official",
						"given": [
							"Severine"
						],
						"family": [
							"Michael"
						]
					}
				],
				"birthDate": "1979-04-01",
				"resourceType": "Patient",
				"extension": [{
						"url": "http://hl7.org/fhir/StructureDefinition/us-core-ethnicity",
						"valueCodeableConcept": {
							"coding": [{
									"code": "2135-2",
									"system": "http://hl7.org/fhir/v3/Ethnicity"
								}
							]
						}
					}, {
						"url": "http://hl7.org/fhir/StructureDefinition/us-core-race",
						"valueCodeableConcept": {
							"coding": [{
									"code": "2108-9",
									"system": "http://hl7.org/fhir/v3/Race"
								}
							]
						}
					}
				],
				"active": true,
				"communication": [{
						"language": {
							"coding": [{
									"code": "en",
									"system": "urn:ietf:bcp:47"
								}
							]
						},
						"preferred": true
					}
				],
				"identifier": [{
						"use": "usual",
						"type": {
							"coding": [{
									"code": "SS",
									"system": "http://hl7.org/fhir/v2/0203"
								}
							]
						},
						"value": "000000969",
						"system": "http://hl7.org/fhir/sid/us-ssn"
					}
				],
				"telecom": [{
						"use": "mobile",
						"rank": 1,
						"value": "122.108.2548",
						"system": "phone"
					}, {
						"rank": 1,
						"value": "Severine.Michael@testpatient.com",
						"system": "email"
					}
				],
				"gender": "male",
				"maritalStatus": {
					"text": "Married",
					"coding": [{
							"code": "M",
							"system": "http://hl7.org/fhir/v3/MaritalStatus",
							"display": "Married"
						}
					]
				}
			},
			"request": {
				"method": "PUT",
				"url": "/Patient/example-patient4"
			}
		}
	]
}
```
Examples:

Any patients with a name containing a given part with "eve" at the start of the name. This would include patients with the given name "Eve", "Evelyn".

```http
GET /fhir/Patient?given=eve
```

Any patients with a name with a given part containing "eve" at any position. This would include patients with the given name "Eve", "Evelyn", and also "Severine".

```http
GET /fhir/Patient?given:contains=eve
```

Any patients with a name with a given part that is exactly "Eve". Note: This would not include patients with the given name "eve" or "EVE".

```http
GET /fhir/Patient?given:exact=Eve
```

An additional modifier :text can be used to specify a search with advanced text handling (see below) though only a few servers are expected to offer this facility.

When a string search parameter refers to the types HumanName and Address, the search covers the elements of type string, and does not cover elements such as use and period.



### uri

The **uri** parameter refers to a URI (RFC 3986 ) element. Matches are precise (e.g. case, accent, and escape) sensitive, and the entire URI must match. The modifier :above or :below can be used to indicate that partial matching is used. For example:

The example below is a request to find any value set with the exact url "http://hl7.org/fhir/ValueSet/allergy-intolerance-type".

```http
GET /fhir/ValueSet?url=http://hl7.org/fhir/ValueSet/allergy-intolerance-type
```

### token

A token type is a parameter that searches on a URI/value pair. It is used against a code or identifier data type where the value may have a URI that scopes its meaning. The search is performed against the pair from a Coding or an Identifier. Matches are literal (e.g. not based on subsumption or other code system features), but not case sensitive. To use subsumption based logic, use the modifiers below, or list all the codes in the hierarchy. The syntax for the value is one of the following:

* [parameter]=[code]: the value of [code] matches a Coding.code or Identifier.value irrespective of the value of the system property
* [parameter]=[system]|[code]: the value of [code] matches a Coding.code or Identifier.value, and the value of [system] matches the system property of the Identifier or Coding
* [parameter]=|[code]: the value of [code] matches a Coding.code or Identifier.value, and the Coding/Identifier has no system property
* [parameter]=[system]|: any element where the value of [system] matches the system property of the Identifier or Coding

Note: The namespace URI and code both must be escaped correctly.

Token search parameters are used for the following data types:

Data Type | URI | Code | Comments
--- | ------ | ------ | ---
Coding | Coding.system | Coding.code |
CodeableConcept | CodeableConcept.coding.system | CodeableConcept.coding.code | Matches against any coding in the CodeableConcept
Identifier | Identifier.system | Identifier.value |
ContactPoint | ContactPoint.use | ContactPoint.value | The use is prepended by http://hl7.org/fhir/contact-point-system/
code | (implicit) | code | the system is defined in the value set (though it's not usually needed)
boolean | (implicit) | boolean | The implicit system is http://hl7.org/fhir/special-values
string | n/a | string | Token is sometimes used for string to indicate that exact matching is the correct default search strategy

Note: The use of token search parameters for boolean fields: the boolean values "true" and "false" are also represented as formal codes in the Special Values code system, which is useful when boolean values need to be represented in a Coding data type. The namespace for these codes is http://hl7.org/fhir/special-values, though there is usually no reason to use this, as a simple true or false is sufficient.

#### Modifiers:

##### Modifier	Use

Modifier | Result
--- | ------
:text | The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text.
:not |Reverse the code matching described in the paragraph above.
:above | The search parameter is a concept with the form [system]\|[code], and the search parameter tests whether the coding in a resource subsumes the specified search code. For example, the search concept has an is-a relationship with the coding in the resource, and this includes the coding itself.
:below | the search parameter is a concept with the form [system]\|[code], and the search parameter tests whether the coding in a resource is subsumed by the specified search code. For example, the coding in the resource has an is-a relationship with the search concept, and this includes the coding itself.
:in | The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set. The reference may be literal (to an address where the value set can be found) or logical (a reference to ValueSet.url). If the server can treat the reference as a literal URL, it does, else it tries to match known logical ValueSet.url values.
:not-in | The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.

Most servers will only process value sets that are already known/registered/supported internally. However, servers can elect to accept any valid reference to a value set. Servers may elect to consider concept mappings when testing for subsumption relationships.

Example searches:

Search for all the patients with an identifier with key = "000000233" in the system "http://hl7.org/fhir/sid/us-ssn"

```http
GET /fhir/Patient?identifier=http://hl7.org/fhir/sid/us-ssn|000000233
```

Search for any patient with a gender that has the code "male"

```http
GET /fhir/Patient?gender=male
```

Search for any patients that are active

```http
GET /fhir/Patient?active=true
```

Let's add more data:

```http
POST /fhir/
Content-Type: application/json

{
	"resourceType": "Bundle",
	"type": "batch",
	"entry": [{
			"fullUrl": "/fhir/Patient/example-patient5",
			"resource": {
      "id": "example-patient5",
  "address": [
    {
      "use": "home",
      "city": "Los Angeles",
      "line": [
        "P.O. Box 238, 4125 Orci Rd."],
      "state": "TN",
            "postalCode": "90666"
    }
  ],
  "name": [
    {
      "use": "official",
      "given": [
        "Danny"
      ],
      "family": [
        "Schultz"
      ]
      }
  ],
  "birthDate": "1993-04-19",
  "resourceType": "Patient",
  "extension": [   
    {
      "url": "http://hl7.org/fhir/StructureDefinition/us-core-ethnicity",
      "valueCodeableConcept": {
        "coding": [
          {
            "code": "2135-2",
            "system": "http://hl7.org/fhir/v3/Ethnicity"
          }
        ]
      }
    },      
    {
      "url": "http://hl7.org/fhir/StructureDefinition/us-core-race",
      "valueCodeableConcept": {
        "coding": [
          {
            "code": "2108-9",
            "system": "http://hl7.org/fhir/v3/Race"
          }
        ]
      }
    }   
  ],
  "active": true,
  "communication": [
    {
      "language": {
        "coding": [
          {
            "code": "en",
            "system": "urn:ietf:bcp:47"
          }
        ]
      },
      "preferred": true
    }
  ],
  "identifier": [
    {
      "use": "usual",
      "type": {
        "coding": [
          {
            "code": "SS",
            "system": "http://hl7.org/fhir/v2/0203"
          }
        ]
      },
      "value": "000000157",
      "system": "http://hl7.org/fhir/sid/us-ssn"
    }
  ],
  "telecom": [
    {
      "use": "mobile",
      "rank": 1,
      "value": "122.108.2548",
      "system": "phone"
    },
    {
      "rank": 1,
      "value": "Danny.Schultz@testpatient.com",
      "system": "email"
    }
  ],
  "gender": "male",
  "maritalStatus": {
    "text": "Married",
    "coding": [
      {
        "code": "M",
        "system": "http://hl7.org/fhir/v3/MaritalStatus",
        "display":"Married"
      }
    ]
  }
},
			"request": {
				"method": "PUT",
				"url": "/Patient/example-patient5"
			}
		}, {
			"fullUrl": "/fhir/Condition/example-condition1",
			"resource": {
      "id": "example-condition1",
				"category": {
					"coding": [{
							"code": "diagnosis",
							"system": "http://hl7.org/fhir/condition-category",
							"display": "Diagnosis"
						}
					]
				},
				"clinicalStatus": "active",
				"dateRecorded": "2016-11-03T19:29:17.190Z",
				"resourceType": "Condition",
				"code": {
					"coding": [{
							"code": "E11.36",
							"system": "http://hl7.org/fhir/sid/icd-10",
							"display": "Type 2 diabetes mellitus without complications"
						}
					]
				},
				"verificationStatus": "confirmed",
				"subject": {
					"reference": "/Patient/example-patient5"
				}
			},
			"request": {
				"method": "PUT",
				"url": "/Condition/example-condition1"
			}
		}, {
			"fullUrl": "/fhir/Observation/example-observation1",
			"resource": {
      "id": "example-observation1",
				"code": {
					"text": "Body mass index (BMI) [Ratio]",
					"coding": [{
							"code": "39156-5",
							"system": "http://loinc.org",
							"display": "Body mass index (BMI) [Ratio]"
						}
					]
				},
		"effectiveDateTime" : "2017-02-28T10:08:01.219Z",
	"issued": "2017-03-08T10:08:01.219Z",	
	"subject": {
					"reference": "/Patient/example-patient5"
				},
				"resourceType": "Observation",
				"valueQuantity": {
					"value": 26.2,
					"unit": "kg/m2",
					"system": "http://unitsofmeasure.org",
					"code": "kg/m2"
				}
			},
			"request": {
				"method": "PUT",
				"url": "/Observation/example-observation1"
			}
		}, {
			"fullUrl": "/fhir/Observation/example-observation2",
			"resource": {
       "id": "example-observation2",
				"resourceType": "Observation",
				"text": {
					"status": "generated",
					"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">HbA1c</div>"
				},
				"status": "final",
				"code": {
					"text": "Hemoglobin A1c [Mass/​volume] in Blood",
					"coding": [{
							"system": "http://loinc.org",
							"code": "41995-2",
							"display": "Hemoglobin A1c [Mass/​volume] in Blood"
						}
					]
				},
				"subject": {
					"reference": "/Patient/example-patient5"
				},
				"effectiveDateTime" : "2017-03-04T10:08:01.219Z",
				"issued": "2017-03-08T10:08:01.219Z",
				"valueQuantity": {
					"value": 12.5,
					"unit": "g/dL",
					"system": "http://unitsofmeasure.org",
					"code": "g/dL"
				},				
				"referenceRange": [{
						"low": {
							"value": 7.5,
							"unit": "g/dL",
							"system": "http://unitsofmeasure.org",
							"code": "g/dL"
						},
						"high": {
							"value": 10,
							"unit": "g/dL",
							"system": "http://unitsofmeasure.org",
							"code": "g/dL"
						}
					}
				]
			},
			"request": {
				"method": "PUT",
				"url": "/Observation/example-observation2"
			}
		}
	]
}
```


Search for any condition with a code "E11.29" in the code system "http://hl7.org/fhir/sid/icd-10"

```http
GET /fhir/Condition?code=http://hl7.org/fhir/sid/icd-10|E11.29
```

Search for any condition with a code "E11.29". Note that there is not often any useful overlap in literal symbols between code systems, so the previous example is generally preferred

```http
GET /fhir/Condition?code=E11.29
```



### quantity

A quantity parameter searches on the Quantity data type. The syntax for the value follows the form:

* [parameter]=[prefix][number]|[system]|[code] matches a quantity with the given unit

The prefix is optional, and is as described above, both regarding how precision and comparator/range operators are interpreted. Example searches:

Search for all the observations with a value of 14.9

```http
GET /fhir/Observation?value-quantity=14.9
```

### reference

A reference parameter refers to references between resources. For example, find all Conditions where the subject reference is a particular patient, where the patient is selected by name or identifier. The interpretation of a reference parameter is either:

* [parameter]=[id] the logical [id] of a resource using a local reference (i.e. a relative reference)
* [parameter]=[type]/[id] the logical [id] of a resource of a specified type using a local reference (i.e. a relative reference), for when the reference can point to different types of resources (e.g. Observation.subject)
* [parameter]=[url] where the [url] is an absolute URL - a reference to a resource by its absolute location

Note: A relative reference resolving to the same value as a specified absolute URL, or vice versa, qualifies as a match. For example, if the search parameter value is Patient/123, then this will find references like this:

```xml
 <patient>
   <reference value="Patient/example-patient2"/>
 </patient>
 ```

 If the server base address is http://example.org/fhir, then the full URL for that reference is http://example.org/fhir/Patient/example-patient2, which means that the search term also matches patient references like this:

 ```xml
<patient>
   <reference value="http://example.org/fhir/Patient/example-patient2"/>
 </patient>
 ```

 In addition, searching for reference=http://example.org/fhir/Patient/example-patient2 will also match both references.

Some references are allowed to point to more than one type of resource; e.g. subject : Reference(Patient|Group|Device|..). In these cases, multiple resources may have the same logical identifier. Servers SHOULD reject a search where the logical id refers to more than one matching resource across different types. In order to allow the client to perform a search in these situations the type is specified explicitly:

```http
GET /fhir/Observation?subject=Patient/example-patient2
```

This searches for any conditions where the subject refers to the patient resource with the logical identifier "23". A modifier is also defined to to allow the client to be explicit about the intended type:

```http
GET /fhir/Observation?subject:Patient=example-patient2
```

This has the same effect as the previous search. The modifier becomes useful when used with chaining as explained in the next section. Note: The [type] modifier can't be used with a reference to a resource found on another server, since the server would not usually know what type that resource has. However, since these are absolute references, there can be no ambiguity about the type.

In some cases, search parameters are defined with an implicitly limited scope. For example, Observation has an element subject, which is a reference to one of a number of types. This has a matching search parameter subject, which refers to any of the possible types. In addition to this, there is another search parameter patient, which also refers to Observation.subject, but is limited to only include references of type Patient. When using the patient search parameter, there is no need to specify ":Patient" as a modifier, or "Patient/" in the search value, as this must always be true.

### Chained parameters

In order to save a client from performing a series of search operations, reference parameters may be "chained" by appending them with a period (.) followed by the name of a search parameter defined for the target resource. This can be done recursively, following a logical path through a graph of related resources, separated by .. For instance, given that the resource DiagnosticReport has a search parameter named subject, which is usually a reference to a Patient resource, and the Patient resource includes a parameter name which searches on patient name, then the search

```http
GET /fhir/DiagnosticReport?subject:Patient.name=eve
```

is a request to return all the lab reports that have a subject whose name includes "eve". Because the Diagnostic Report subject can be one of a set of different resources, it's necessary to limit the search to a particular type (Patient in this case).
This request above returns all the lab reports that have a subject which is a patient, whose name includes "eve".

Advanced Search Note: Where a chained parameter searches a resource reference that may have more than one type of resource as its target, the parameter chain may end up referring to search parameters with the same name on more than one kind of resource at once. Servers SHOULD reject a search where the logical id refers to more than one matching resource across different types. For example, the client has to specify the type explicitly using the syntax in the second example above.

### Elements

If one of the summary views defined above is not appropriate, a client can request a specific set of elements be returned as part of a resource using the _elements parameter:

Request all Patient resources and output only elements name, identifier, and birthDate:

```http
GET /fhir/Patient?_elements=name,identifier,birthDate
```
Request all Observation resources and output only elements code, effectiveDateTime, and valueQuantity:

```http
GET /fhir/Observation?_elements=code,effectiveDateTime,valueQuantity
```

The _elements parameter consists of a comma separated list of base element names such as, elements defined at the root level in the resource. Only elements that are listed are to be returned. Clients SHOULD list all mandatory and modifier elements in a resource as part of the list of elements. The list of elements does not apply to included resources.

## Handling Errors

If a server is unable to execute a search request, it may return an error. A HTTP status code of 403 signifies that the server refused to perform the search, while other 4xx and 5xx codes signify that some sort of error has occurred. When the search fails, a server SHOULD return an OperationOutcome detailing the cause of the failure. Note: An empty search result is not a failure.

In some cases, parameters may cause an error. For instance:

A parameter may refer to a non-existent resource e.g.

```http
GET /fhir/Observation?subject=101
```
, where \" 101 \" does not exist. This example above should not return an error, just an empty result.

A parameter may refer to an unknown code e.g.

```http
GET /fhir/Observation?code=loinc|1234-1
```
, where the LOINC code \"1234 - 1\" is not known to the server.  This example above should not return an error, just an empty result.

A parameter may refer to a time that is out of scope e.g.

```http
GET /fhir/Condition?date-recorded=le1995
```
, where the system only has data going back to 2001. This example above should not return an error, just an empty result.

A parameter may use an illegal or unacceptable modifier e.g.

```http
GET /fhir/Condition?date-recorded:text=1995
```
, where the modifier cannot be processed by the server. This example above should return an error.

A data time parameter may have incorrect format e.g.

```http
GET /fhir/Condition?date-recorded=23%20May%202009
```

This example above should return an error.


