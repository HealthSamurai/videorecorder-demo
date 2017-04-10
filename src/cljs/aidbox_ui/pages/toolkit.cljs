(ns aidbox-ui.pages.toolkit
  (:require [reagent.core :as r]
            [aidbox-ui.pages.page :as page]
            [aidbox-ui.components.core :as cmp]
            [aidbox-ui.components.tooltip :as tt]
            [aidbox-ui.components.code-editor :as ce]))

;; (defn- wait-3-secs []
;;   (go
;;     (<! (async/timeout (* 1000 3)))))

#_(defn toolkit-page []
  [:section.toolkit-page
   [tt/tooltip-dom]

   ;; [cmp/button :primary "Button With Spinner Test" wait-3-secs]

   [:h1 "Pssss buddy, wanna see some magic?"]

   [:h2 "Typography"]

   [:p "Aidbox is heavily based on FHIR. "
    [:a {:href "http://fhir.org/"} "FHIR (Fast Healthcare Interoperability Resources)"]
    " is a modern open HL7 standard for exchanging healthcare information electronically."]
   [:p "Aidbox is heavily based on FHIR. FHIR (Fast Healthcare Interoperability Resources) is a modern open HL7 standard for exchanging healthcare information electronically."]

   [:h2 "h2. Secondary header"]
   [:p "The data in the Resource covers the who information about the patient: its attributes are focused on the demographic information necessary to support the administrative, financial and logistic procedures. A Patient record is generally created and maintained by each organization providing care for a patient. A patient or animal receiving care at multiple organizations may therefore have its information present in multiple Patient Resources. Not all concepts are included within the base resource (such as race, ethnicity, organ donor status, nationalilty, etc.), but may be found in profiles defined for specific jurisdictions (e.g., US Meaningful Use Program) or standard extensions. Such fields vary widely between jurisdictions and often have different names and valuesets for the similar concepts, but they are not similar enough to be able to map and exchange"]

   [:h3 "h3. Another header"]
   [:p "FHIR describes about 100 models for medical data - Resources (such as Patient, Encounter, Observation etc) and REST API to access and manipulate such data (create, update, search etc)."]

   [:h4 "h4. Some rarely used header"]
   [:p "With Aidbox you can focus on your business ideas validation, delegating technical details to us."]

   [:ul
    [:li "Scalable and powerful database - fhirbase - to store and query your data"]
    [:li "FHIR compliant REST API to access and manipulate this data"]
    [:li "OAuth and flexible security rules to control access to application data"]
    [:li "Terminology service for popular coding systems (LOINC, SNOMED, ICD10, RxNorm) and custom dictionaries (ValueSets)"]]

   [:p "Aidbox is heavily based on FHIR. FHIR (Fast Healthcare Interoperability Resources) is a modern open HL7 standard for exchanging healthcare information electronically."]

   [:ol
    [:li "Scalable and powerful database - fhirbase - to store and query your data"]
    [:li "FHIR compliant REST API to access and manipulate this data"]
    [:li "OAuth and flexible security rules to control access to application data"]
    [:li "Terminology service for popular coding systems (LOINC, SNOMED, ICD10, RxNorm) and custom dictionaries (ValueSets)"]]

   [:h2 "Special styles for inline text"]

   [:p "Hey man, you can use " [:mark "<mark> element"] " to highlight important stuff in your writings."]
   [:p "You're nerdy person? Using techy stuff a lot in your text? " [:code "<code>"] " element was made especially for you."]

   [:p "To describe key bindings, use <kdb> element: "
    [:kbd (cmp/raw-html "&#8984;")] "+" [:kbd (cmp/raw-html "&#8997;")] "+" [:kbd "I"]
    " to open DevTools."]

   [:p "Some words are intended to be smaller than others. You know what element to use then."
    [:br]
    [:small "Signing this contract, you're obligating to pay 50% of your monthly income to Mike Lapshin's cats."]]

   [:p "Other useful decorations for text: " [:strong "strong element"] ", " [:em "italicized text"] " and " [:span.muted "muted text for humble writers"] "."]

   [:h2 "Code blocks"]
   [:p "Can't express your thoughts without speaking code? I know that feeling, man. Just add "
    [:code ".block"] " class to the " [:code "<code>"] " element and show everyone how deep rabbit's hole can be."]

   [:code.block
    "(defn render-method [{:keys [params swagger common]}]
  (-> (if (seq params)
        (update-in swagger [:parameters] concat params)
        swagger)
      (merge-common common)))"]

   [ce/code-editor ]

   [:h2 "Flexbox Grid System"]
   [:p "Go to " [:a {:href "http://hugeinc.github.io/flexboxgrid-sass/"} "author's site"] " to see full documentation for this beast."]

   [:h2 "Buttons"]

   [:p "Everyone needs buttons. Buttons are everywhere. Just look around you. Then look below. Do you see those hot bitches? Yeah, you see them. So styles, much colors! Can't wait to grab couple of them and put in your fucking form? I see. Don't stop yourself, they are made exactly for this."]

   [:div.row
    [:div.col-xs-2
     [:div.box [:button.btn.btn-primary "Primary Button"]]]

    [:div.col-xs-2
     [:div.box [:button.btn.btn-secondary "Secondary Button"]]]

    [:div.col-xs-2
     [:div.box [:button.btn.btn-danger "Danger Button"]]]

    [:div.col-xs-2
     [:div.box [:button.btn.btn-success "Success Button"]]]]

   [:h3 "Disabled state"]
   [:p "Can't touch this! Toggled via " [:code ".disabled"] " class or with attribute " [:code "disabled='1'"] "."]
   [:div.row
    [:div.col-xs-2
     [:div.box [:button.btn.btn-primary {:disabled "1"} "Primary Button"]]]

    [:div.col-xs-2
     [:div.box [:button.btn.btn-secondary.disabled "Secondary Button"]]]

    [:div.col-xs-2
     [:div.box [:button.btn.btn-danger.disabled "Danger Button"]]]

    [:div.col-xs-2
     [:div.box [:button.btn.btn-success.disabled "Success Button"]]]]

   [:h3 "Small size"]
   [:div.row
    [:div.col-xs-2
     [:div.box [:div.spinner-container [:a.btn.btn-primary.btn-sm {:href "javascript:void"} "Primary Button"]]]]

    [:div.col-xs-2
     [:div.box [:a.btn.btn-secondary.btn-sm {:href "javascript:void"} "Secondary Button"]]]

    [:div.col-xs-2
     [:div.box [:a.btn.btn-danger.btn-sm {:href "javascript:void"} "Danger Button"]]]

    [:div.col-xs-2
     [:div.box [:a.btn.btn-success.btn-sm {:href "javascript:void"} "Success Button"]]]]

   [:h3 "Margin out-of-the box"]
   [:p "Put several buttons in a row and get margin between them without any coding. Magic!"]

   [:a.btn.btn-primary.btn-sm {:href "javascript:void"} "Primary Button"]
   [:a.btn.btn-secondary.btn-sm {:href "javascript:void"} "Secondary Button"]

   [:h2 "Spinners"]
   [:p "User will never get boried looking at this little cuteness. Just add " [:code ".spinner-container"] " class to any element on your page and put " [:code "<span class=\"dots-spinner\"><span /><span /><span /></span>"] " inside it. " "That's all, go grab " [:em "pirozhok"] " from " [:em "polka"] "."]
   [:p ]

   [:div.row {:style {:margin-bottom "1rem"}}
    [:div.col-xs-2
     [:div.box
      [:p.spinner-container {:style { :border "1px solid #ddd" :padding "1rem" }} "The data in the Resource covers the who information about the patient: its attributes are focused on the demographic information necessary to support the administrative, financial and logistic procedures."
       [:span.dots-spinner [:span] [:span] [:span]]]]]]

   [:p
    [:a.btn.btn-primary.disabled.spinner-container {:href "javascript:void;"}
     "Primary Button"
     [:span.dots-spinner [:span] [:span] [:span]]]
    [:a.btn.btn-secondary.disabled.spinner-container {:href "javascript:void;"}
     "Secondary Button"
     [:span.dots-spinner [:span] [:span] [:span]]]]

   [:p "You can customize dots color using " [:code "background-color: #xxx"] " CSS property."]

   [:div.row
    [:div.col-xs-2
     [:div.box
      [:p.spinner-container "The data in the Resource covers the who information about the patient: its attributes are focused on the demographic information necessary to support the administrative, financial and logistic procedures."
       [:span.dots-spinner [:span {:style {:background-color "#f0f" }}] [:span {:style {:background-color "#ff0" }}] [:span {:style {:background-color "#00f" }}]]]]]]

   [:h2 "Inputs"]

   [:p [:input.input {:type "text" :defaultValue "Regular Text Input"}]]
   [:p [:input.input.error {:type "text" :defaultValue "Input with invalid data"}]]
   [:p [:input.input {:type "text" :disabled true :defaultValue "Disabled Input"}]]
   [:p [:textarea.input {:defaultValue "Hello, I'm textarea!"}]]

   (let [countries (mapv (fn [x] [:option x])
                         ["Slovakia" "USSR" "San Marino" "Luxembourg"])]
     [:div
      [:p "Some selects?"]
      [:p (into [:select.select] countries)]
      [:p (into [:select.select.error] countries)]
      [:p (into [:select.select {:disabled "1"}] countries)]
      [:p ""]])

   [:p [:label.checkbox [:input.checkbox {:type "checkbox" :defaultChecked true}] "Remember Me"]]
   [:p [:label.checkbox [:input.checkbox {:type "checkbox" :defaultChecked false}] "Yes, I'm at least 18 years old"]]
   [:p [:label.checkbox [:input.checkbox {:type "checkbox" :disabled "1" :defaultChecked true}] "Please keep me posted with all this " [:mark "marketing bullshit"] " your company produces"]]

   [:p "Please choose desired OAuth workflow:"]

   [:p [:label.radio [:input.radio {:type "radio" :name "type" :defaultChecked true}] "Client Credentials"]]
   [:p [:label.radio [:input.radio {:type "radio" :name "type" :defaultChecked false}] "Authorization Code"]]
   [:p [:label.radio [:input.radio {:type "radio" :name "type" :defaultChecked false}] "Implicit"]]
   [:p [:label.radio [:input.radio {:type "radio" :name "type" :disabled "1" :defaultChecked false}] "HTTP Digest"]]

   [:h2 "Forms"]

   [:div {:style {:width "50%"}}
    [:div.form-row
     [:label "First Name"]
     [:div.input-wrapper
      [:input.input {:type "text" :defaultValue ""}]]
     [:p.hint "Patient's first name like Veronika or Ignat. Do not put Last Name here."]]

    [:div.form-row
     [:label "Last Name"]
     [:div.input-wrapper
      [:input.input {:type "text" :defaultValue ""}]]
     [:p.hint "Patient's last name. Last Name follows First Name, you know. It's how school teacher calls you."]]]

   [:div.form-row
    [:label "Gender"]
    [:div.input-wrapper
     [:label.radio [:input.radio {:type "radio" :name "gender" :defaultChecked false}] "Male"]
     [:label.radio [:input.radio {:type "radio" :name "gender" :defaultChecked false}] "Female"]
     [:label.radio [:input.radio {:type "radio" :name "gender" :defaultChecked false}] "Agender"]
     [:label.radio [:input.radio {:type "radio" :name "gender" :defaultChecked false}] "Other"]]]

   [:div.form-row
    [:div.input-wrapper
     [:label.checkbox [:input.checkbox {:type "checkbox" :defaultChecked false}]
      "Patient Smokes"
      [:span.hint "Check this if patient smokes tobacco, marijuana or electronic cigarette."]]

     [:label.checkbox [:input.checkbox {:type "checkbox" :defaultChecked false}]
      "Patient Drinks Alcohol"
      [:span.hint "Check this if patient drinks alcohol more than " [:mark "twice per week"] "."]]]]

   [:button.btn.btn-primary "Create Patient"] [:button.btn.btn-secondary "Go Back"]

   [:h2 "Tooltip"]

   [:p "Make Aidbox even more sexier and easier to use with this groundbreaking tooltip component."]

   (let [show-tt-handler (fn [pos]
                           (fn [e]
                             (tt/show-tooltip (.-target e)
                                              [:p "Hello, I'm" [:br] "tooltip content"]
                                              {:position pos})))]
     [:div.row
      [:div.col-xs-2
       [:div.box [:a.btn.btn-primary.btn-sm
                  {:href "javascript:void" :on-mouse-over (show-tt-handler :n)}
                  "North Tooltip"]]]

      [:div.col-xs-2
       [:div.box [:a.btn.btn-secondary.btn-sm
                  {:href "javascript:void" :on-mouse-over (show-tt-handler :s)}
                  "South Tooltip"]]]

      [:div.col-xs-2
       [:div.box [:a.btn.btn-danger.btn-sm
                  {:href "javascript:void" :on-mouse-over (show-tt-handler :w)}
                  "West Tooltip"]]]

      [:div.col-xs-2
       [:div.box [:a.btn.btn-success.btn-sm
                  {:href "javascript:void" :on-mouse-over (show-tt-handler :e)}
                  "East Tooltip"]]]])

   [:p ""]
   [:p "Another line to add more spacing around tooltiped buttons."]
   ])

#_(defmethod page/page :toolkit
  [k]
  [toolkit-page])
