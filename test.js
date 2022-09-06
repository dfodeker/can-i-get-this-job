{% include 'fxr-url-parts' %}
<meta name="facebook-domain-verification" content="adpuhdqy0nptf2wiypo95we659l1qa" />
<script>
  var declaredSiteCountry="{{ declaredSiteCountry }}";
  // ***** Delete this -for testing only
  //var declaredSiteCountry="Finland";
</script>
{{ 'api.jquery.js' | shopify_asset_url | script_tag }}
{{ 'featherlight.min.js' | asset_url | script_tag}}
<!--fxr add adobe font--->
<link rel="stylesheet" href="https://use.typekit.net/css4xqd.css">
<!-- code for featherlight popup -->
{{ 'featherlight.css' | asset_url | stylesheet_tag}}
<!--gdpr popup-->
<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
<script>
  function privacyNotice(i) {
      i += "<div class='privacyNotifyClose'>X</div>", $('<div class="privacyNotify"></div>').appendTo("body").html(i).fadeIn()
  }
  $(document).ready(function() {
          skipPrivacyNotice = Number(Cookies.get('shownPrivacy'));
          console.log("cookie is " + skipPrivacyNotice);
          thePrivacyMessage = "FXR Racing Inc. uses cookies to give you the best shopping experience possible. By using our site, you agree to us using cookies in accordance with our <a href='/pages/privacy-policy' target='_blank'>privacy policy</a>.";
          if(!skipPrivacyNotice){
              privacyNotice(thePrivacyMessage);
              $(".privacyNotify .privacyNotifyClose").on("click", function() {
                  $(this).parent().fadeOut("fast", function() {
                      $(this).remove()
                  });
                  Cookies.set('shownPrivacy', 1, {
                      expires: 180,
                      path: "/"
                  });
              });
          }
  });
/* END gdpr popup */
  
/* USER Country Selection*/
  var currencyPairings = { "Canada": "CAD", "United States": "USD", "Norway": "NOK", "Sweden": "SEK", "Finland": "EUR", "Germany": "EUR", "France": "EUR", "Netherlands": "EUR", "Belgium": "EUR", "Italy": "EUR", "Spain": "EUR", "United Kingdom": "EUR", "Switzerland": "EUR", "EU": "EUR" };
  // URL Country parameter exists and is valid? Set the cookie
  var selectedCountry=getUrlParam('selectedCountry');
  selectedCountry=selectedCountry && selectedCountry in currencyPairings ? selectedCountry : false;
  if(selectedCountry){
    Cookies.set('selectedCountry', selectedCountry, {
      expires: 60,
      path: "/"
    });
  }
  //function to reset cookie to default if necessary
  function countryCookieToDefault(){
    cookieSelectedCountry=declaredSiteCountry;
    Cookies.set('selectedCountry', declaredSiteCountry, {
      expires: 60,
      path: "/"
    });
  }
  // get the cookie, and if invalid, set it to the site-declared value
  var cookieSelectedCountry=typeof Cookies.get('selectedCountry')==='undefined' ? false : Cookies.get('selectedCountry');
  if( !cookieSelectedCountry || !(cookieSelectedCountry in currencyPairings) ){
    countryCookieToDefault();
  }
  
  //now update all country/currency selections based on cookie setting
  function changeAllFlagSelectors(){
    console.log('testfunc');
    var flagInputSelector="#selectFlagMobInput #selectFlagMob"+cookieSelectedCountry.replace(/\s/g, '');
  	var flagDeskSelected="li#selectFlag"+onewordize(cookieSelectedCountry);
    console.log('dt'+flagDeskSelected);
  	$('#selectFlagMobInput option:selected').attr("selected", null);
    $(flagInputSelector).attr("selected", "selected");
    // now change desktop flag selector
    var newFlagSrc="/flag-selector-"+handleize(cookieSelectedCountry).toLowerCase()+".svg";
    $('img.SelectorFlagIcon').attr('src',function(index,attr){
      return attr.replace(/\/[^/.]+\.(svg|jpg|png|gif)/i, newFlagSrc);
    });
    $('span#mainFlagLetters').html(currencyPairings[cookieSelectedCountry]);
    $(flagDeskSelected).hide();
  }
  
  $( document ).ready(function() {
    console.log('isready'+cookieSelectedCountry);
    switch(cookieSelectedCountry) {
      case "Canada":
        if(declaredSiteCountry!="Canada") countryCookieToDefault();
        changeAllFlagSelectors();
        break;
      case "United States":
        if(declaredSiteCountry!="United States") countryCookieToDefault();
        changeAllFlagSelectors();
        break;
      case "Norway":
        if(declaredSiteCountry!="Norway") countryCookieToDefault();
        changeAllFlagSelectors();
        break;
      case "Sweden":
        if(declaredSiteCountry!="Sweden") countryCookieToDefault();
        changeAllFlagSelectors();
        break;
      case "Germany":case "France":case "Netherlands":case "Belgium":case "Italy":case "Spain":case "United Kingdom":case "Switzerland":case "EU":
        if(declaredSiteCountry!="Switzerland") countryCookieToDefault();
        changeAllFlagSelectors();
        break;
      default:
        countryCookieToDefault();
    }
  }); 
/* END USER Country Selection */
  </script>
  <!---is customer visiting via dealer link?--->
  <script src="{{ 'fxr-dealer.js' | asset_url }}"></script>

<!--NO UK SHIP popup-->
<!--script>
  console.log('testing geo');
  var cookieHour = 1/24;
  var messageHoursExpire = cookieHour*168;
  $(document).ready(function() {
    GeolizrAPI.addEventListener('geolizr.geoData', function(geodata) {
      skipStorePickup = Number(Cookies.get('shownStorePickup'));
      if(geodata.country.code === "GB" && !skipStorePickup) {
        console.log("in GB");
        fxrPopUp("<div style='padding:30px; background-color:white; width:100%; min-width:200px; max-width:800px; max-height:640px; min-height:100px;'><h4 style='font-weight:800; font-size:1.5em;'>SHIPPING TO THE UNITED KINGDOM HAS RESUMED!</h4>FXR orders shipping to locations in the UK will now go through as usual. We apologize for the interruption and thank you for your patience.</div>");
        
        Cookies.set('shownStorePickup', 1, {
            expires: messageHoursExpire
        });
      }   
    });
  });
</script-->
<!--no uk shipping end-->
