
; /* Start:"a:4:{s:4:"full";s:100:"/bitrix/components/bitrix/sale.products.gift.section/templates/.default/script.min.js?17472039802727";s:6:"source";s:81:"/bitrix/components/bitrix/sale.products.gift.section/templates/.default/script.js";s:3:"min";s:85:"/bitrix/components/bitrix/sale.products.gift.section/templates/.default/script.min.js";s:3:"map";s:85:"/bitrix/components/bitrix/sale.products.gift.section/templates/.default/script.map.js";}"*/
(function(){"use strict";if(!!window.JCSaleProductsGiftSectionComponent)return;window.JCSaleProductsGiftSectionComponent=function(e){this.formPosting=false;this.siteId=e.siteId||"";this.template=e.template||"";this.componentPath=e.componentPath||"";this.parameters=e.parameters||"";this.container=document.querySelector('[data-entity="'+e.container+'"]');if(e.initiallyShowHeader){BX.ready(BX.delegate(this.showHeader,this))}if(e.deferredLoad){BX.ready(BX.delegate(this.deferredLoad,this))}};window.JCSaleProductsGiftSectionComponent.prototype={deferredLoad:function(){this.sendRequest({action:"deferredLoad"})},sendRequest:function(e){var t={siteId:this.siteId,template:this.template,parameters:this.parameters};BX.ajax({url:this.componentPath+"/ajax.php"+(document.location.href.indexOf("clear_cache=Y")!==-1?"?clear_cache=Y":""),method:"POST",dataType:"json",timeout:60,data:BX.merge(t,e),onsuccess:BX.delegate(function(t){if(!t||!t.JS)return;BX.ajax.processScripts(BX.processHTML(t.JS).SCRIPT,false,BX.delegate(function(){this.showAction(t,e)},this))},this)})},showAction:function(e,t){if(!t)return;switch(t.action){case"deferredLoad":this.processDeferredLoadAction(e,t.bigData==="Y");break}},processDeferredLoadAction:function(e,t){if(!e)return;var i=t?this.bigData.rows:{};this.processItems(e.items,BX.util.array_keys(i))},processItems:function(e,t){if(!e)return;var i=BX.processHTML(e,false),a=BX.create("DIV");var s,n,o;a.innerHTML=i.HTML;s=a.querySelectorAll('[data-entity="items-row"]');if(s.length){this.showHeader(true);for(n in s){if(s.hasOwnProperty(n)){o=t?this.container.querySelectorAll('[data-entity="items-row"]'):false;s[n].style.opacity=0;if(o&&BX.type.isDomNode(o[t[n]])){o[t[n]].parentNode.insertBefore(s[n],o[t[n]])}else{this.container.appendChild(s[n])}}}new BX.easing({duration:2e3,start:{opacity:0},finish:{opacity:100},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(e){for(var t in s){if(s.hasOwnProperty(t)){s[t].style.opacity=e.opacity/100}}},complete:function(){for(var e in s){if(s.hasOwnProperty(e)){s[e].removeAttribute("style")}}}}).animate()}BX.ajax.processScripts(i.SCRIPT)},showHeader:function(e){var t=BX.findParent(this.container,{attr:{"data-entity":"parent-container"}}),i;if(t&&BX.type.isDomNode(t)){i=t.querySelector('[data-entity="header"]');if(i&&i.getAttribute("data-showed")!="true"){i.style.display="";if(e){new BX.easing({duration:2e3,start:{opacity:0},finish:{opacity:100},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(e){i.style.opacity=e.opacity/100},complete:function(){i.removeAttribute("style");i.setAttribute("data-showed","true")}}).animate()}else{i.style.opacity=100}}}}}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:87:"/bitrix/components/bitrix/catalog.item/templates/.default/script.min.js?174720395541322";s:6:"source";s:67:"/bitrix/components/bitrix/catalog.item/templates/.default/script.js";s:3:"min";s:71:"/bitrix/components/bitrix/catalog.item/templates/.default/script.min.js";s:3:"map";s:71:"/bitrix/components/bitrix/catalog.item/templates/.default/script.map.js";}"*/
(function(t){"use strict";if(t.JCCatalogItem)return;var i=function(t){i.superclass.constructor.apply(this,arguments);this.buttonNode=BX.create("span",{props:{className:"btn btn-default btn-buy btn-sm",id:this.id},style:typeof t.style==="object"?t.style:{},text:t.text,events:this.contextEvents});if(BX.browser.IsIE()){this.buttonNode.setAttribute("hideFocus","hidefocus")}};BX.extend(i,BX.PopupWindowButton);t.JCCatalogItem=function(t){this.productType=0;this.showQuantity=true;this.showAbsent=true;this.secondPict=false;this.showOldPrice=false;this.showMaxQuantity="N";this.relativeQuantityFactor=5;this.showPercent=false;this.showSkuProps=false;this.basketAction="ADD";this.showClosePopup=false;this.useCompare=false;this.showSubscription=false;this.visual={ID:"",PICT_ID:"",SECOND_PICT_ID:"",PICT_SLIDER_ID:"",QUANTITY_ID:"",QUANTITY_UP_ID:"",QUANTITY_DOWN_ID:"",PRICE_ID:"",PRICE_OLD_ID:"",DSC_PERC:"",SECOND_DSC_PERC:"",DISPLAY_PROP_DIV:"",BASKET_PROP_DIV:"",SUBSCRIBE_ID:""};this.product={checkQuantity:false,maxQuantity:0,stepQuantity:1,isDblQuantity:false,canBuy:true,name:"",pict:{},id:0,addUrl:"",buyUrl:""};this.basketMode="";this.basketData={useProps:false,emptyProps:false,quantity:"quantity",props:"prop",basketUrl:"",sku_props:"",sku_props_var:"basket_props",add_url:"",buy_url:""};this.compareData={compareUrl:"",compareDeleteUrl:"",comparePath:""};this.defaultPict={pict:null,secondPict:null};this.defaultSliderOptions={interval:3e3,wrap:true};this.slider={options:{},items:[],active:null,sliding:null,paused:null,interval:null,progress:null};this.touch=null;this.quantityDelay=null;this.quantityTimer=null;this.checkQuantity=false;this.maxQuantity=0;this.minQuantity=0;this.stepQuantity=1;this.isDblQuantity=false;this.canBuy=true;this.precision=6;this.precisionFactor=Math.pow(10,this.precision);this.bigData=false;this.fullDisplayMode=false;this.viewMode="";this.templateTheme="";this.currentPriceMode="";this.currentPrices=[];this.currentPriceSelected=0;this.currentQuantityRanges=[];this.currentQuantityRangeSelected=0;this.offers=[];this.offerNum=0;this.treeProps=[];this.selectedValues={};this.obProduct=null;this.blockNodes={};this.obQuantity=null;this.obQuantityUp=null;this.obQuantityDown=null;this.obQuantityLimit={};this.obPict=null;this.obSecondPict=null;this.obPictSlider=null;this.obPictSliderIndicator=null;this.obPrice=null;this.obTree=null;this.obBuyBtn=null;this.obBasketActions=null;this.obNotAvail=null;this.obSubscribe=null;this.obDscPerc=null;this.obSecondDscPerc=null;this.obSkuProps=null;this.obMeasure=null;this.obCompare=null;this.obPopupWin=null;this.basketUrl="";this.basketParams={};this.isTouchDevice=BX.hasClass(document.documentElement,"bx-touch");this.hoverTimer=null;this.hoverStateChangeForbidden=false;this.mouseX=null;this.mouseY=null;this.useEnhancedEcommerce=false;this.dataLayerName="dataLayer";this.brandProperty=false;this.errorCode=0;if(typeof t==="object"){if(t.PRODUCT_TYPE){this.productType=parseInt(t.PRODUCT_TYPE,10)}this.showQuantity=t.SHOW_QUANTITY;this.showAbsent=t.SHOW_ABSENT;this.secondPict=t.SECOND_PICT;this.showOldPrice=t.SHOW_OLD_PRICE;this.showMaxQuantity=t.SHOW_MAX_QUANTITY;this.relativeQuantityFactor=parseInt(t.RELATIVE_QUANTITY_FACTOR);this.showPercent=t.SHOW_DISCOUNT_PERCENT;this.showSkuProps=t.SHOW_SKU_PROPS;this.showSubscription=t.USE_SUBSCRIBE;if(t.ADD_TO_BASKET_ACTION){this.basketAction=t.ADD_TO_BASKET_ACTION}this.showClosePopup=t.SHOW_CLOSE_POPUP;this.useCompare=t.DISPLAY_COMPARE;this.fullDisplayMode=t.PRODUCT_DISPLAY_MODE==="Y";this.bigData=t.BIG_DATA;this.viewMode=t.VIEW_MODE||"";this.templateTheme=t.TEMPLATE_THEME||"";this.useEnhancedEcommerce=t.USE_ENHANCED_ECOMMERCE==="Y";this.dataLayerName=t.DATA_LAYER_NAME;this.brandProperty=t.BRAND_PROPERTY;this.visual=t.VISUAL;switch(this.productType){case 0:case 1:case 2:case 7:if(t.PRODUCT&&typeof t.PRODUCT==="object"){this.currentPriceMode=t.PRODUCT.ITEM_PRICE_MODE;this.currentPrices=t.PRODUCT.ITEM_PRICES;this.currentPriceSelected=t.PRODUCT.ITEM_PRICE_SELECTED;this.currentQuantityRanges=t.PRODUCT.ITEM_QUANTITY_RANGES;this.currentQuantityRangeSelected=t.PRODUCT.ITEM_QUANTITY_RANGE_SELECTED;if(this.showQuantity){this.product.checkQuantity=t.PRODUCT.CHECK_QUANTITY;this.product.isDblQuantity=t.PRODUCT.QUANTITY_FLOAT;if(this.product.checkQuantity){this.product.maxQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.MAX_QUANTITY):parseInt(t.PRODUCT.MAX_QUANTITY,10)}this.product.stepQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.STEP_QUANTITY):parseInt(t.PRODUCT.STEP_QUANTITY,10);this.checkQuantity=this.product.checkQuantity;this.isDblQuantity=this.product.isDblQuantity;this.stepQuantity=this.product.stepQuantity;this.maxQuantity=this.product.maxQuantity;this.minQuantity=this.currentPriceMode==="Q"?parseFloat(this.currentPrices[this.currentPriceSelected].MIN_QUANTITY):this.stepQuantity;if(this.isDblQuantity){this.stepQuantity=Math.round(this.stepQuantity*this.precisionFactor)/this.precisionFactor}}this.product.canBuy=t.PRODUCT.CAN_BUY;if(t.PRODUCT.MORE_PHOTO_COUNT){this.product.morePhotoCount=t.PRODUCT.MORE_PHOTO_COUNT;this.product.morePhoto=t.PRODUCT.MORE_PHOTO}if(t.PRODUCT.RCM_ID){this.product.rcmId=t.PRODUCT.RCM_ID}this.canBuy=this.product.canBuy;this.product.name=t.PRODUCT.NAME;this.product.pict=t.PRODUCT.PICT;this.product.id=t.PRODUCT.ID;this.product.DETAIL_PAGE_URL=t.PRODUCT.DETAIL_PAGE_URL;if(t.PRODUCT.ADD_URL){this.product.addUrl=t.PRODUCT.ADD_URL}if(t.PRODUCT.BUY_URL){this.product.buyUrl=t.PRODUCT.BUY_URL}if(t.BASKET&&typeof t.BASKET==="object"){this.basketData.useProps=t.BASKET.ADD_PROPS;this.basketData.emptyProps=t.BASKET.EMPTY_PROPS}}else{this.errorCode=-1}break;case 3:if(t.PRODUCT&&typeof t.PRODUCT==="object"){this.product.name=t.PRODUCT.NAME;this.product.id=t.PRODUCT.ID;this.product.DETAIL_PAGE_URL=t.PRODUCT.DETAIL_PAGE_URL;this.product.morePhotoCount=t.PRODUCT.MORE_PHOTO_COUNT;this.product.morePhoto=t.PRODUCT.MORE_PHOTO;if(t.PRODUCT.RCM_ID){this.product.rcmId=t.PRODUCT.RCM_ID}}if(t.OFFERS&&BX.type.isArray(t.OFFERS)){this.offers=t.OFFERS;this.offerNum=0;if(t.OFFER_SELECTED){this.offerNum=parseInt(t.OFFER_SELECTED,10)}if(isNaN(this.offerNum)){this.offerNum=0}if(t.TREE_PROPS){this.treeProps=t.TREE_PROPS}if(t.DEFAULT_PICTURE){this.defaultPict.pict=t.DEFAULT_PICTURE.PICTURE;this.defaultPict.secondPict=t.DEFAULT_PICTURE.PICTURE_SECOND}}break;default:this.errorCode=-1}if(t.BASKET&&typeof t.BASKET==="object"){if(t.BASKET.QUANTITY){this.basketData.quantity=t.BASKET.QUANTITY}if(t.BASKET.PROPS){this.basketData.props=t.BASKET.PROPS}if(t.BASKET.BASKET_URL){this.basketData.basketUrl=t.BASKET.BASKET_URL}if(3===this.productType){if(t.BASKET.SKU_PROPS){this.basketData.sku_props=t.BASKET.SKU_PROPS}}if(t.BASKET.ADD_URL_TEMPLATE){this.basketData.add_url=t.BASKET.ADD_URL_TEMPLATE}if(t.BASKET.BUY_URL_TEMPLATE){this.basketData.buy_url=t.BASKET.BUY_URL_TEMPLATE}if(this.basketData.add_url===""&&this.basketData.buy_url===""){this.errorCode=-1024}}if(this.useCompare){if(t.COMPARE&&typeof t.COMPARE==="object"){if(t.COMPARE.COMPARE_PATH){this.compareData.comparePath=t.COMPARE.COMPARE_PATH}if(t.COMPARE.COMPARE_URL_TEMPLATE){this.compareData.compareUrl=t.COMPARE.COMPARE_URL_TEMPLATE}else{this.useCompare=false}if(t.COMPARE.COMPARE_DELETE_URL_TEMPLATE){this.compareData.compareDeleteUrl=t.COMPARE.COMPARE_DELETE_URL_TEMPLATE}else{this.useCompare=false}}else{this.useCompare=false}}this.isFacebookConversionCustomizeProductEventEnabled=t.IS_FACEBOOK_CONVERSION_CUSTOMIZE_PRODUCT_EVENT_ENABLED}if(this.errorCode===0){BX.ready(BX.delegate(this.init,this))}};t.JCCatalogItem.prototype={init:function(){var t=0,i=null;this.obProduct=BX(this.visual.ID);if(!this.obProduct){this.errorCode=-1}this.obPict=BX(this.visual.PICT_ID);if(!this.obPict){this.errorCode=-2}if(this.secondPict&&this.visual.SECOND_PICT_ID){this.obSecondPict=BX(this.visual.SECOND_PICT_ID)}this.obPictSlider=BX(this.visual.PICT_SLIDER_ID);this.obPictSliderIndicator=BX(this.visual.PICT_SLIDER_ID+"_indicator");this.obPictSliderProgressBar=BX(this.visual.PICT_SLIDER_ID+"_progress_bar");if(!this.obPictSlider){this.errorCode=-4}this.obPrice=BX(this.visual.PRICE_ID);this.obPriceOld=BX(this.visual.PRICE_OLD_ID);this.obPriceTotal=BX(this.visual.PRICE_TOTAL_ID);if(!this.obPrice){this.errorCode=-16}if(this.showQuantity&&this.visual.QUANTITY_ID){this.obQuantity=BX(this.visual.QUANTITY_ID);this.blockNodes.quantity=this.obProduct.querySelector('[data-entity="quantity-block"]');if(!this.isTouchDevice){BX.bind(this.obQuantity,"focus",BX.proxy(this.onFocus,this));BX.bind(this.obQuantity,"blur",BX.proxy(this.onBlur,this))}if(this.visual.QUANTITY_UP_ID){this.obQuantityUp=BX(this.visual.QUANTITY_UP_ID)}if(this.visual.QUANTITY_DOWN_ID){this.obQuantityDown=BX(this.visual.QUANTITY_DOWN_ID)}}if(this.visual.QUANTITY_LIMIT&&this.showMaxQuantity!=="N"){this.obQuantityLimit.all=BX(this.visual.QUANTITY_LIMIT);if(this.obQuantityLimit.all){this.obQuantityLimit.value=this.obQuantityLimit.all.querySelector('[data-entity="quantity-limit-value"]');if(!this.obQuantityLimit.value){this.obQuantityLimit.all=null}}}if(this.productType===3&&this.fullDisplayMode){if(this.visual.TREE_ID){this.obTree=BX(this.visual.TREE_ID);if(!this.obTree){this.errorCode=-256}}if(this.visual.QUANTITY_MEASURE){this.obMeasure=BX(this.visual.QUANTITY_MEASURE)}}this.obBasketActions=BX(this.visual.BASKET_ACTIONS_ID);if(this.obBasketActions){if(this.visual.BUY_ID){this.obBuyBtn=BX(this.visual.BUY_ID)}}this.obNotAvail=BX(this.visual.NOT_AVAILABLE_MESS);if(this.showSubscription){this.obSubscribe=BX(this.visual.SUBSCRIBE_ID)}if(this.showPercent){if(this.visual.DSC_PERC){this.obDscPerc=BX(this.visual.DSC_PERC)}if(this.secondPict&&this.visual.SECOND_DSC_PERC){this.obSecondDscPerc=BX(this.visual.SECOND_DSC_PERC)}}if(this.showSkuProps){if(this.visual.DISPLAY_PROP_DIV){this.obSkuProps=BX(this.visual.DISPLAY_PROP_DIV)}}if(this.errorCode===0){if(this.isTouchDevice){BX.bind(this.obPictSlider,"touchstart",BX.proxy(this.touchStartEvent,this));BX.bind(this.obPictSlider,"touchend",BX.proxy(this.touchEndEvent,this));BX.bind(this.obPictSlider,"touchcancel",BX.proxy(this.touchEndEvent,this))}else{if(this.viewMode==="CARD"){BX.bind(this.obProduct,"mouseenter",BX.proxy(this.hoverOn,this));BX.bind(this.obProduct,"mouseleave",BX.proxy(this.hoverOff,this))}BX.bind(this.obProduct,"mouseenter",BX.proxy(this.cycleSlider,this));BX.bind(this.obProduct,"mouseleave",BX.proxy(this.stopSlider,this))}if(this.bigData){var e=BX.findChildren(this.obProduct,{tag:"a"},true);if(e){for(t in e){if(e.hasOwnProperty(t)){if(e[t].getAttribute("href")==this.product.DETAIL_PAGE_URL){BX.bind(e[t],"click",BX.proxy(this.rememberProductRecommendation,this))}}}}}if(this.showQuantity){var s=this.isTouchDevice?"touchstart":"mousedown";var r=this.isTouchDevice?"touchend":"mouseup";if(this.obQuantityUp){BX.bind(this.obQuantityUp,s,BX.proxy(this.startQuantityInterval,this));BX.bind(this.obQuantityUp,r,BX.proxy(this.clearQuantityInterval,this));BX.bind(this.obQuantityUp,"mouseout",BX.proxy(this.clearQuantityInterval,this));BX.bind(this.obQuantityUp,"click",BX.delegate(this.quantityUp,this))}if(this.obQuantityDown){BX.bind(this.obQuantityDown,s,BX.proxy(this.startQuantityInterval,this));BX.bind(this.obQuantityDown,r,BX.proxy(this.clearQuantityInterval,this));BX.bind(this.obQuantityDown,"mouseout",BX.proxy(this.clearQuantityInterval,this));BX.bind(this.obQuantityDown,"click",BX.delegate(this.quantityDown,this))}if(this.obQuantity){BX.bind(this.obQuantity,"change",BX.delegate(this.quantityChange,this))}}switch(this.productType){case 0:case 1:case 2:case 7:if(parseInt(this.product.morePhotoCount)>1&&this.obPictSlider){this.initializeSlider()}this.checkQuantityControls();break;case 3:if(this.offers.length>0){i=BX.findChildren(this.obTree,{tagName:"li"},true);if(i&&i.length){for(t=0;t<i.length;t++){BX.bind(i[t],"click",BX.delegate(this.selectOfferProp,this))}}this.setCurrent()}else if(parseInt(this.product.morePhotoCount)>1&&this.obPictSlider){this.initializeSlider()}break}if(this.obBuyBtn){if(this.basketAction==="ADD"){BX.bind(this.obBuyBtn,"click",BX.proxy(this.add2Basket,this))}else{BX.bind(this.obBuyBtn,"click",BX.proxy(this.buyBasket,this))}}if(this.useCompare){this.obCompare=BX(this.visual.COMPARE_LINK_ID);if(this.obCompare){BX.bind(this.obCompare,"click",BX.proxy(this.compare,this))}BX.addCustomEvent("onCatalogDeleteCompare",BX.proxy(this.checkDeletedCompare,this))}}},setAnalyticsDataLayer:function(i){if(!this.useEnhancedEcommerce||!this.dataLayerName)return;var e={},s={},r=[],a,o,h,n,l,u;switch(this.productType){case 0:case 1:case 2:case 7:e={id:this.product.id,name:this.product.name,price:this.currentPrices[this.currentPriceSelected]&&this.currentPrices[this.currentPriceSelected].PRICE,brand:BX.type.isArray(this.brandProperty)?this.brandProperty.join("/"):this.brandProperty};break;case 3:for(a in this.offers[this.offerNum].TREE){if(this.offers[this.offerNum].TREE.hasOwnProperty(a)){n=a.substring(5);l=this.offers[this.offerNum].TREE[a];for(o in this.treeProps){if(this.treeProps.hasOwnProperty(o)&&this.treeProps[o].ID==n){for(h in this.treeProps[o].VALUES){u=this.treeProps[o].VALUES[h];if(u.ID==l){r.push(u.NAME);break}}}}}}e={id:this.offers[this.offerNum].ID,name:this.offers[this.offerNum].NAME,price:this.currentPrices[this.currentPriceSelected]&&this.currentPrices[this.currentPriceSelected].PRICE,brand:BX.type.isArray(this.brandProperty)?this.brandProperty.join("/"):this.brandProperty,variant:r.join("/")};break}switch(i){case"addToCart":s={ecommerce:{currencyCode:this.currentPrices[this.currentPriceSelected]&&this.currentPrices[this.currentPriceSelected].CURRENCY||"",add:{products:[{name:e.name||"",id:e.id||"",price:e.price||0,brand:e.brand||"",category:e.category||"",variant:e.variant||"",quantity:this.showQuantity&&this.obQuantity?this.obQuantity.value:1}]}}};break}t[this.dataLayerName]=t[this.dataLayerName]||[];t[this.dataLayerName].push(s)},hoverOn:function(t){clearTimeout(this.hoverTimer);this.obProduct.style.height=getComputedStyle(this.obProduct).height;BX.addClass(this.obProduct,"hover");BX.PreventDefault(t)},hoverOff:function(t){if(this.hoverStateChangeForbidden)return;BX.removeClass(this.obProduct,"hover");this.hoverTimer=setTimeout(BX.delegate((function(){this.obProduct.style.height="auto"}),this),300);BX.PreventDefault(t)},onFocus:function(){this.hoverStateChangeForbidden=true;BX.bind(document,"mousemove",BX.proxy(this.captureMousePosition,this))},onBlur:function(){this.hoverStateChangeForbidden=false;BX.unbind(document,"mousemove",BX.proxy(this.captureMousePosition,this));var t=document.elementFromPoint(this.mouseX,this.mouseY);if(!t||!this.obProduct.contains(t)){this.hoverOff()}},captureMousePosition:function(t){this.mouseX=t.clientX;this.mouseY=t.clientY},getCookie:function(t){var i=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return i?decodeURIComponent(i[1]):null},rememberProductRecommendation:function(){var t=BX.cookie_prefix+"_RCM_PRODUCT_LOG",i=this.getCookie(t),e=false;var s=[],r;if(i){s=i.split(".")}var a=s.length;while(a--){r=s[a].split("-");if(r[0]==this.product.id){r=s[a].split("-");r[1]=this.product.rcmId;r[2]=BX.current_server_time;s[a]=r.join("-");e=true}else{if(BX.current_server_time-r[2]>3600*24*30){s.splice(a,1)}}}if(!e){s.push([this.product.id,this.product.rcmId,BX.current_server_time].join("-"))}var o=s.join("."),h=new Date((new Date).getTime()+1e3*3600*24*365*10).toUTCString();document.cookie=t+"="+o+"; path=/; expires="+h+"; domain="+BX.cookie_domain},startQuantityInterval:function(){var t=BX.proxy_context;var i=t.id===this.visual.QUANTITY_DOWN_ID?BX.proxy(this.quantityDown,this):BX.proxy(this.quantityUp,this);this.quantityDelay=setTimeout(BX.delegate((function(){this.quantityTimer=setInterval(i,150)}),this),300)},clearQuantityInterval:function(){clearTimeout(this.quantityDelay);clearInterval(this.quantityTimer)},quantityUp:function(){var t=0,i=true;if(this.errorCode===0&&this.showQuantity&&this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t+=this.stepQuantity;if(this.checkQuantity){if(t>this.maxQuantity){i=false}}if(i){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t;this.setPrice()}}}},quantityDown:function(){var t=0,i=true;if(this.errorCode===0&&this.showQuantity&&this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t-=this.stepQuantity;this.checkPriceRange(t);if(t<this.minQuantity){i=false}if(i){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t;this.setPrice()}}}},quantityChange:function(){var t=0,i;if(this.errorCode===0&&this.showQuantity){if(this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):Math.round(this.obQuantity.value);if(!isNaN(t)){if(this.checkQuantity){if(t>this.maxQuantity){t=this.maxQuantity}}this.checkPriceRange(t);i=Math.floor(Math.round(t*this.precisionFactor/this.stepQuantity)/this.precisionFactor)||1;t=i<=1?this.stepQuantity:i*this.stepQuantity;t=Math.round(t*this.precisionFactor)/this.precisionFactor;if(t<this.minQuantity){t=this.minQuantity}this.obQuantity.value=t}else{this.obQuantity.value=this.minQuantity}}else{this.obQuantity.value=this.minQuantity}this.setPrice()}},quantitySet:function(t){var i,e;var s=this.offers[t],r=this.offers[this.offerNum];if(this.errorCode===0){this.canBuy=s.CAN_BUY;this.currentPriceMode=s.ITEM_PRICE_MODE;this.currentPrices=s.ITEM_PRICES;this.currentPriceSelected=s.ITEM_PRICE_SELECTED;this.currentQuantityRanges=s.ITEM_QUANTITY_RANGES;this.currentQuantityRangeSelected=s.ITEM_QUANTITY_RANGE_SELECTED;if(this.canBuy){if(this.blockNodes.quantity){BX.style(this.blockNodes.quantity,"display","")}if(this.obBasketActions){BX.style(this.obBasketActions,"display","")}if(this.obNotAvail){BX.style(this.obNotAvail,"display","none")}if(this.obSubscribe){BX.style(this.obSubscribe,"display","none")}}else{if(this.blockNodes.quantity){BX.style(this.blockNodes.quantity,"display","none")}if(this.obBasketActions){BX.style(this.obBasketActions,"display","none")}if(this.obNotAvail){BX.style(this.obNotAvail,"display","")}if(this.obSubscribe){if(s.CATALOG_SUBSCRIBE==="Y"){BX.style(this.obSubscribe,"display","");this.obSubscribe.setAttribute("data-item",s.ID);BX(this.visual.SUBSCRIBE_ID+"_hidden").click()}else{BX.style(this.obSubscribe,"display","none")}}}this.isDblQuantity=s.QUANTITY_FLOAT;this.checkQuantity=s.CHECK_QUANTITY;if(this.isDblQuantity){this.stepQuantity=Math.round(parseFloat(s.STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor;this.maxQuantity=parseFloat(s.MAX_QUANTITY);this.minQuantity=this.currentPriceMode==="Q"?parseFloat(this.currentPrices[this.currentPriceSelected].MIN_QUANTITY):this.stepQuantity}else{this.stepQuantity=parseInt(s.STEP_QUANTITY,10);this.maxQuantity=parseInt(s.MAX_QUANTITY,10);this.minQuantity=this.currentPriceMode==="Q"?parseInt(this.currentPrices[this.currentPriceSelected].MIN_QUANTITY):this.stepQuantity}if(this.showQuantity){var a=r.ITEM_PRICES.length&&r.ITEM_PRICES[r.ITEM_PRICE_SELECTED]&&r.ITEM_PRICES[r.ITEM_PRICE_SELECTED].MIN_QUANTITY!=this.minQuantity;if(this.isDblQuantity){i=Math.round(parseFloat(r.STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor!==this.stepQuantity||a||r.MEASURE!==s.MEASURE||this.checkQuantity&&parseFloat(r.MAX_QUANTITY)>this.maxQuantity&&parseFloat(this.obQuantity.value)>this.maxQuantity}else{i=parseInt(r.STEP_QUANTITY,10)!==this.stepQuantity||a||r.MEASURE!==s.MEASURE||this.checkQuantity&&parseInt(r.MAX_QUANTITY,10)>this.maxQuantity&&parseInt(this.obQuantity.value,10)>this.maxQuantity}this.obQuantity.disabled=!this.canBuy;if(i){this.obQuantity.value=this.minQuantity}if(this.obMeasure){if(s.MEASURE){BX.adjust(this.obMeasure,{html:s.MEASURE})}else{BX.adjust(this.obMeasure,{html:""})}}}if(this.obQuantityLimit.all){if(!this.checkQuantity||this.maxQuantity==0){BX.adjust(this.obQuantityLimit.value,{html:""});BX.adjust(this.obQuantityLimit.all,{style:{display:"none"}})}else{if(this.showMaxQuantity==="M"){e=this.maxQuantity/this.stepQuantity>=this.relativeQuantityFactor?BX.message("RELATIVE_QUANTITY_MANY"):BX.message("RELATIVE_QUANTITY_FEW")}else{e=this.maxQuantity;if(s.MEASURE){e+=" "+s.MEASURE}}BX.adjust(this.obQuantityLimit.value,{html:e});BX.adjust(this.obQuantityLimit.all,{style:{display:""}})}}}},initializeSlider:function(){var t=this.obPictSlider.getAttribute("data-slider-wrap");if(t){this.slider.options.wrap=t==="true"}else{this.slider.options.wrap=this.defaultSliderOptions.wrap}if(this.isTouchDevice){this.slider.options.interval=false}else{this.slider.options.interval=parseInt(this.obPictSlider.getAttribute("data-slider-interval"))||this.defaultSliderOptions.interval;if(this.slider.options.interval<700){this.slider.options.interval=700}if(this.obPictSliderIndicator){var i=this.obPictSliderIndicator.querySelectorAll("[data-go-to]");for(var e in i){if(i.hasOwnProperty(e)){BX.bind(i[e],"click",BX.proxy(this.sliderClickHandler,this))}}}if(this.obPictSliderProgressBar){if(this.slider.progress){this.resetProgress();this.cycleSlider()}else{this.slider.progress=new BX.easing({transition:BX.easing.transitions.linear,step:BX.delegate((function(t){this.obPictSliderProgressBar.style.width=t.width/10+"%"}),this)})}}}},checkTouch:function(t){if(!t||!t.changedTouches)return false;return t.changedTouches[0].identifier===this.touch.identifier},touchStartEvent:function(t){if(t.touches.length!=1)return;this.touch=t.changedTouches[0]},touchEndEvent:function(t){if(!this.checkTouch(t))return;var i=this.touch.pageX-t.changedTouches[0].pageX,e=this.touch.pageY-t.changedTouches[0].pageY;if(Math.abs(i)>=Math.abs(e)+10){if(i>0){this.slideNext()}if(i<0){this.slidePrev()}}},sliderClickHandler:function(t){var i=BX.getEventTarget(t),e=i.getAttribute("data-go-to");if(e){this.slideTo(e)}BX.PreventDefault(t)},slideNext:function(){if(this.slider.sliding)return;return this.slide("next")},slidePrev:function(){if(this.slider.sliding)return;return this.slide("prev")},slideTo:function(t){this.slider.active=BX.findChild(this.obPictSlider,{className:"item active"},true,false);this.slider.progress&&(this.slider.interval=true);var i=this.getItemIndex(this.slider.active);if(t>this.slider.items.length-1||t<0)return;if(this.slider.sliding)return false;if(i==t){this.stopSlider();this.cycleSlider();return}return this.slide(t>i?"next":"prev",this.eq(this.slider.items,t))},slide:function(t,i){var e=BX.findChild(this.obPictSlider,{className:"item active"},true,false),s=this.slider.interval,r=t==="next"?"left":"right";i=i||this.getItemForDirection(t,e);if(BX.hasClass(i,"active")){return this.slider.sliding=false}this.slider.sliding=true;s&&this.stopSlider();if(this.obPictSliderIndicator){BX.removeClass(this.obPictSliderIndicator.querySelector(".active"),"active");var a=this.obPictSliderIndicator.querySelectorAll("[data-go-to]")[this.getItemIndex(i)];a&&BX.addClass(a,"active")}if(BX.hasClass(this.obPictSlider,"slide")&&!BX.browser.IsIE()){var o=this;BX.addClass(i,t);i.offsetWidth;BX.addClass(e,r);BX.addClass(i,r);setTimeout((function(){BX.addClass(i,"active");BX.removeClass(e,"active");BX.removeClass(e,r);BX.removeClass(i,t);BX.removeClass(i,r);o.slider.sliding=false}),700)}else{BX.addClass(i,"active");this.slider.sliding=false}this.obPictSliderProgressBar&&this.resetProgress();s&&this.cycleSlider()},stopSlider:function(t){t||(this.slider.paused=true);this.slider.interval&&clearInterval(this.slider.interval);if(this.slider.progress){this.slider.progress.stop();var i=parseInt(this.obPictSliderProgressBar.style.width);this.slider.progress.options.duration=this.slider.options.interval*i/200;this.slider.progress.options.start={width:i*10};this.slider.progress.options.finish={width:0};this.slider.progress.options.complete=null;this.slider.progress.animate()}},cycleSlider:function(t){t||(this.slider.paused=false);this.slider.interval&&clearInterval(this.slider.interval);if(this.slider.options.interval&&!this.slider.paused){if(this.slider.progress){this.slider.progress.stop();var i=parseInt(this.obPictSliderProgressBar.style.width);this.slider.progress.options.duration=this.slider.options.interval*(100-i)/100;this.slider.progress.options.start={width:i*10};this.slider.progress.options.finish={width:1e3};this.slider.progress.options.complete=BX.delegate((function(){this.slider.interval=true;this.slideNext()}),this);this.slider.progress.animate()}else{this.slider.interval=setInterval(BX.proxy(this.slideNext,this),this.slider.options.interval)}}},resetProgress:function(){this.slider.progress&&this.slider.progress.stop();this.obPictSliderProgressBar.style.width=0},getItemForDirection:function(t,i){var e=this.getItemIndex(i),s=t==="prev"&&e===0||t==="next"&&e==this.slider.items.length-1;if(s&&!this.slider.options.wrap)return i;var r=t==="prev"?-1:1,a=(e+r)%this.slider.items.length;return this.eq(this.slider.items,a)},getItemIndex:function(t){this.slider.items=BX.findChildren(t.parentNode,{className:"item"},true);return this.slider.items.indexOf(t||this.slider.active)},eq:function(t,i){var e=t.length,s=+i+(i<0?e:0);return s>=0&&s<e?t[s]:{}},selectOfferProp:function(){var t=0,i="",e="",s=[],r=null,a=BX.proxy_context;if(a&&a.hasAttribute("data-treevalue")){if(BX.hasClass(a,"selected"))return;e=a.getAttribute("data-treevalue");s=e.split("_");if(this.searchOfferPropIndex(s[0],s[1])){r=BX.findChildren(a.parentNode,{tagName:"li"},false);if(r&&0<r.length){for(t=0;t<r.length;t++){i=r[t].getAttribute("data-onevalue");if(i===s[1]){BX.addClass(r[t],"selected")}else{BX.removeClass(r[t],"selected")}}}if(this.isFacebookConversionCustomizeProductEventEnabled&&BX.Type.isArrayFilled(this.offers)&&BX.Type.isObject(this.offers[this.offerNum])){BX.ajax.runAction("sale.facebookconversion.customizeProduct",{data:{offerId:this.offers[this.offerNum]["ID"]}})}}}},searchOfferPropIndex:function(t,i){var e="",s=false,r,a,o=[],h=[],n=-1,l={},u=[];for(r=0;r<this.treeProps.length;r++){if(this.treeProps[r].ID===t){n=r;break}}if(-1<n){for(r=0;r<n;r++){e="PROP_"+this.treeProps[r].ID;l[e]=this.selectedValues[e]}e="PROP_"+this.treeProps[n].ID;s=this.getRowValues(l,e);if(!s){return false}if(!BX.util.in_array(i,s)){return false}l[e]=i;for(r=n+1;r<this.treeProps.length;r++){e="PROP_"+this.treeProps[r].ID;s=this.getRowValues(l,e);if(!s){return false}h=[];if(this.showAbsent){o=[];u=[];u=BX.clone(l,true);for(a=0;a<s.length;a++){u[e]=s[a];h[h.length]=s[a];if(this.getCanBuy(u))o[o.length]=s[a]}}else{o=s}if(this.selectedValues[e]&&BX.util.in_array(this.selectedValues[e],o)){l[e]=this.selectedValues[e]}else{if(this.showAbsent)l[e]=o.length>0?o[0]:h[0];else l[e]=o[0]}this.updateRow(r,l[e],s,o)}this.selectedValues=l;this.changeInfo()}return true},updateRow:function(t,i,e,s){var r=0,a="",o=false,h=null;var n=this.obTree.querySelectorAll('[data-entity="sku-line-block"]'),l;if(t>-1&&t<n.length){l=n[t].querySelector("ul");h=BX.findChildren(l,{tagName:"li"},false);if(h&&0<h.length){for(r=0;r<h.length;r++){a=h[r].getAttribute("data-onevalue");o=a===i;if(o){BX.addClass(h[r],"selected")}else{BX.removeClass(h[r],"selected")}if(BX.util.in_array(a,s)){BX.removeClass(h[r],"notallowed")}else{BX.addClass(h[r],"notallowed")}h[r].style.display=BX.util.in_array(a,e)?"":"none";if(o){n[t].style.display=a==0&&s.length==1?"none":""}}}}},getRowValues:function(t,i){var e=0,s,r=[],a=false,o=true;if(0===t.length){for(e=0;e<this.offers.length;e++){if(!BX.util.in_array(this.offers[e].TREE[i],r)){r[r.length]=this.offers[e].TREE[i]}}a=true}else{for(e=0;e<this.offers.length;e++){o=true;for(s in t){if(t[s]!==this.offers[e].TREE[s]){o=false;break}}if(o){if(!BX.util.in_array(this.offers[e].TREE[i],r)){r[r.length]=this.offers[e].TREE[i]}a=true}}}return a?r:false},getCanBuy:function(t){var i,e,s=false,r=true;for(i=0;i<this.offers.length;i++){r=true;for(e in t){if(t[e]!==this.offers[i].TREE[e]){r=false;break}}if(r){if(this.offers[i].CAN_BUY){s=true;break}}}return s},setCurrent:function(){var t,i=0,e=[],s="",r=false,a={},o=[],h=this.offers[this.offerNum].TREE;for(t=0;t<this.treeProps.length;t++){s="PROP_"+this.treeProps[t].ID;r=this.getRowValues(a,s);if(!r){break}if(BX.util.in_array(h[s],r)){a[s]=h[s]}else{a[s]=r[0];this.offerNum=0}if(this.showAbsent){e=[];o=[];o=BX.clone(a,true);for(i=0;i<r.length;i++){o[s]=r[i];if(this.getCanBuy(o)){e[e.length]=r[i]}}}else{e=r}this.updateRow(t,a[s],r,e)}this.selectedValues=a;this.changeInfo()},changeInfo:function(){var t,i,e=-1,s=true,r;for(t=0;t<this.offers.length;t++){s=true;for(i in this.selectedValues){if(this.selectedValues[i]!==this.offers[t].TREE[i]){s=false;break}}if(s){e=t;break}}if(e>-1){if(parseInt(this.offers[e].MORE_PHOTO_COUNT)>1&&this.obPictSlider){if(this.obPict){this.obPict.style.display="none"}if(this.obSecondPict){this.obSecondPict.style.display="none"}BX.cleanNode(this.obPictSlider);for(t in this.offers[e].MORE_PHOTO){if(this.offers[e].MORE_PHOTO.hasOwnProperty(t)){this.obPictSlider.appendChild(BX.create("SPAN",{props:{className:"product-item-image-slide item"+(t==0?" active":"")},style:{backgroundImage:"url('"+this.offers[e].MORE_PHOTO[t].SRC+"')"}}))}}if(this.obPictSliderIndicator){BX.cleanNode(this.obPictSliderIndicator);for(t in this.offers[e].MORE_PHOTO){if(this.offers[e].MORE_PHOTO.hasOwnProperty(t)){this.obPictSliderIndicator.appendChild(BX.create("DIV",{attrs:{"data-go-to":t},props:{className:"product-item-image-slider-control"+(t==0?" active":"")}}));this.obPictSliderIndicator.appendChild(document.createTextNode(" "))}}this.obPictSliderIndicator.style.display=""}if(this.obPictSliderProgressBar){this.obPictSliderProgressBar.style.display=""}this.obPictSlider.style.display="";this.initializeSlider()}else{if(this.obPictSlider){this.obPictSlider.style.display="none"}if(this.obPictSliderIndicator){this.obPictSliderIndicator.style.display="none"}if(this.obPictSliderProgressBar){this.obPictSliderProgressBar.style.display="none"}if(this.obPict){if(this.offers[e].PREVIEW_PICTURE){BX.adjust(this.obPict,{style:{backgroundImage:"url('"+this.offers[e].PREVIEW_PICTURE.SRC+"')"}})}else{BX.adjust(this.obPict,{style:{backgroundImage:"url('"+this.defaultPict.pict.SRC+"')"}})}this.obPict.style.display=""}if(this.secondPict&&this.obSecondPict){if(this.offers[e].PREVIEW_PICTURE_SECOND){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url('"+this.offers[e].PREVIEW_PICTURE_SECOND.SRC+"')"}})}else if(this.offers[e].PREVIEW_PICTURE.SRC){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url('"+this.offers[e].PREVIEW_PICTURE.SRC+"')"}})}else if(this.defaultPict.secondPict){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url('"+this.defaultPict.secondPict.SRC+"')"}})}else{BX.adjust(this.obSecondPict,{style:{backgroundImage:"url('"+this.defaultPict.pict.SRC+"')"}})}this.obSecondPict.style.display=""}}if(this.showSkuProps&&this.obSkuProps){if(this.offers[e].DISPLAY_PROPERTIES.length){BX.adjust(this.obSkuProps,{style:{display:""},html:this.offers[e].DISPLAY_PROPERTIES})}else{BX.adjust(this.obSkuProps,{style:{display:"none"},html:""})}}this.quantitySet(e);this.setPrice();this.setCompared(this.offers[e].COMPARED);this.offerNum=e}},checkPriceRange:function(t){if(typeof t==="undefined"||this.currentPriceMode!="Q")return;var i,e=false;for(var s in this.currentQuantityRanges){if(this.currentQuantityRanges.hasOwnProperty(s)){i=this.currentQuantityRanges[s];if(parseInt(t)>=parseInt(i.SORT_FROM)&&(i.SORT_TO=="INF"||parseInt(t)<=parseInt(i.SORT_TO))){e=true;this.currentQuantityRangeSelected=i.HASH;break}}}if(!e&&(i=this.getMinPriceRange())){this.currentQuantityRangeSelected=i.HASH}for(var r in this.currentPrices){if(this.currentPrices.hasOwnProperty(r)){if(this.currentPrices[r].QUANTITY_HASH==this.currentQuantityRangeSelected){this.currentPriceSelected=r;break}}}},getMinPriceRange:function(){var t;for(var i in this.currentQuantityRanges){if(this.currentQuantityRanges.hasOwnProperty(i)){if(!t||parseInt(this.currentQuantityRanges[i].SORT_FROM)<parseInt(t.SORT_FROM)){t=this.currentQuantityRanges[i]}}}return t},checkQuantityControls:function(){if(!this.obQuantity)return;var t=this.checkQuantity&&parseFloat(this.obQuantity.value)+this.stepQuantity>this.maxQuantity,i=parseFloat(this.obQuantity.value)-this.stepQuantity<this.minQuantity;if(t){BX.addClass(this.obQuantityUp,"product-item-amount-field-btn-disabled")}else if(BX.hasClass(this.obQuantityUp,"product-item-amount-field-btn-disabled")){BX.removeClass(this.obQuantityUp,"product-item-amount-field-btn-disabled")}if(i){BX.addClass(this.obQuantityDown,"product-item-amount-field-btn-disabled")}else if(BX.hasClass(this.obQuantityDown,"product-item-amount-field-btn-disabled")){BX.removeClass(this.obQuantityDown,"product-item-amount-field-btn-disabled")}if(t&&i){this.obQuantity.setAttribute("disabled","disabled")}else{this.obQuantity.removeAttribute("disabled")}},setPrice:function(){var t,i;if(this.obQuantity){this.checkPriceRange(this.obQuantity.value)}this.checkQuantityControls();i=this.currentPrices[this.currentPriceSelected];if(this.obPrice){if(i){BX.adjust(this.obPrice,{html:BX.Currency.currencyFormat(i.RATIO_PRICE,i.CURRENCY,true)})}else{BX.adjust(this.obPrice,{html:""})}if(this.showOldPrice&&this.obPriceOld){if(i&&i.RATIO_PRICE!==i.RATIO_BASE_PRICE){BX.adjust(this.obPriceOld,{style:{display:""},html:BX.Currency.currencyFormat(i.RATIO_BASE_PRICE,i.CURRENCY,true)})}else{BX.adjust(this.obPriceOld,{style:{display:"none"},html:""})}}if(this.obPriceTotal){if(i&&this.obQuantity&&this.obQuantity.value!=this.stepQuantity){BX.adjust(this.obPriceTotal,{html:BX.message("PRICE_TOTAL_PREFIX")+" <strong>"+BX.Currency.currencyFormat(i.PRICE*this.obQuantity.value,i.CURRENCY,true)+"</strong>",style:{display:""}})}else{BX.adjust(this.obPriceTotal,{html:"",style:{display:"none"}})}}if(this.showPercent){if(i&&parseInt(i.PERCENT)>0){t={style:{display:""},html:-i.PERCENT+"%"}}else{t={style:{display:"none"},html:""}}if(this.obDscPerc){BX.adjust(this.obDscPerc,t)}if(this.obSecondDscPerc){BX.adjust(this.obSecondDscPerc,t)}}}},compare:function(t){var i=this.obCompare.querySelector('[data-entity="compare-checkbox"]'),e=BX.getEventTarget(t),s=true;if(i){s=e===i?i.checked:!i.checked}var r=s?this.compareData.compareUrl:this.compareData.compareDeleteUrl,a;if(r){if(e!==i){BX.PreventDefault(t);this.setCompared(s)}switch(this.productType){case 0:case 1:case 2:case 7:a=r.replace("#ID#",this.product.id.toString());break;case 3:a=r.replace("#ID#",this.offers[this.offerNum].ID);break}BX.ajax({method:"POST",dataType:s?"json":"html",url:a+(a.indexOf("?")!==-1?"&":"?")+"ajax_action=Y",onsuccess:s?BX.proxy(this.compareResult,this):BX.proxy(this.compareDeleteResult,this)})}},compareResult:function(t){var e,s;if(this.obPopupWin){this.obPopupWin.close()}if(!BX.type.isPlainObject(t))return;this.initPopupWindow();if(this.offers.length>0){this.offers[this.offerNum].COMPARED=t.STATUS==="OK"}if(t.STATUS==="OK"){BX.onCustomEvent("OnCompareChange");e='<div style="width: 100%; margin: 0; text-align: center;"><p>'+BX.message("COMPARE_MESSAGE_OK")+"</p></div>";if(this.showClosePopup){s=[new i({text:BX.message("BTN_MESSAGE_COMPARE_REDIRECT"),events:{click:BX.delegate(this.compareRedirect,this)},style:{marginRight:"10px"}}),new i({text:BX.message("BTN_MESSAGE_CLOSE_POPUP"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}else{s=[new i({text:BX.message("BTN_MESSAGE_COMPARE_REDIRECT"),events:{click:BX.delegate(this.compareRedirect,this)}})]}}else{e='<div style="width: 100%; margin: 0; text-align: center;"><p>'+(t.MESSAGE?t.MESSAGE:BX.message("COMPARE_UNKNOWN_ERROR"))+"</p></div>";s=[new i({text:BX.message("BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}this.obPopupWin.setTitleBar(BX.message("COMPARE_TITLE"));this.obPopupWin.setContent(e);this.obPopupWin.setButtons(s);this.obPopupWin.show()},compareDeleteResult:function(){BX.onCustomEvent("OnCompareChange");if(this.offers&&this.offers.length){this.offers[this.offerNum].COMPARED=false}},setCompared:function(t){if(!this.obCompare)return;var i=this.obCompare.querySelector('[data-entity="compare-checkbox"]');if(i){i.checked=t}},setCompareInfo:function(t){if(!BX.type.isArray(t))return;for(var i in this.offers){if(this.offers.hasOwnProperty(i)){this.offers[i].COMPARED=BX.util.in_array(this.offers[i].ID,t)}}},compareRedirect:function(){if(this.compareData.comparePath){location.href=this.compareData.comparePath}else{this.obPopupWin.close()}},checkDeletedCompare:function(t){switch(this.productType){case 0:case 1:case 2:case 7:if(this.product.id==t){this.setCompared(false)}break;case 3:var i=this.offers.length;while(i--){if(this.offers[i].ID==t){this.offers[i].COMPARED=false;if(this.offerNum==i){this.setCompared(false)}break}}}},initBasketUrl:function(){this.basketUrl=this.basketMode==="ADD"?this.basketData.add_url:this.basketData.buy_url;switch(this.productType){case 1:case 2:case 7:this.basketUrl=this.basketUrl.replace("#ID#",this.product.id.toString());break;case 3:this.basketUrl=this.basketUrl.replace("#ID#",this.offers[this.offerNum].ID);break}this.basketParams={ajax_basket:"Y"};if(this.showQuantity){this.basketParams[this.basketData.quantity]=this.obQuantity.value}if(this.basketData.sku_props){this.basketParams[this.basketData.sku_props_var]=this.basketData.sku_props}},fillBasketProps:function(){if(!this.visual.BASKET_PROP_DIV){return}var t=0,i=null,e=false,s=null;if(this.basketData.useProps&&!this.basketData.emptyProps){if(this.obPopupWin&&this.obPopupWin.contentContainer){s=this.obPopupWin.contentContainer}}else{s=BX(this.visual.BASKET_PROP_DIV)}if(s){i=s.getElementsByTagName("select");if(i&&i.length){for(t=0;t<i.length;t++){if(!i[t].disabled){switch(i[t].type.toLowerCase()){case"select-one":this.basketParams[i[t].name]=i[t].value;e=true;break;default:break}}}}i=s.getElementsByTagName("input");if(i&&i.length){for(t=0;t<i.length;t++){if(!i[t].disabled){switch(i[t].type.toLowerCase()){case"hidden":this.basketParams[i[t].name]=i[t].value;e=true;break;case"radio":if(i[t].checked){this.basketParams[i[t].name]=i[t].value;e=true}break;default:break}}}}}if(!e){this.basketParams[this.basketData.props]=[];this.basketParams[this.basketData.props][0]=0}},add2Basket:function(){this.basketMode="ADD";this.basket()},buyBasket:function(){this.basketMode="BUY";this.basket()},sendToBasket:function(){if(!this.canBuy){return}if(this.product&&this.product.id&&this.bigData){this.rememberProductRecommendation()}this.initBasketUrl();this.fillBasketProps();BX.ajax({method:"POST",dataType:"json",url:this.basketUrl,data:this.basketParams,onsuccess:BX.proxy(this.basketResult,this)})},basket:function(){var t="";if(!this.canBuy){return}switch(this.productType){case 1:case 2:case 7:if(this.basketData.useProps&&!this.basketData.emptyProps){this.initPopupWindow();this.obPopupWin.setTitleBar(BX.message("TITLE_BASKET_PROPS"));if(BX(this.visual.BASKET_PROP_DIV)){t=BX(this.visual.BASKET_PROP_DIV).innerHTML}this.obPopupWin.setContent(t);this.obPopupWin.setButtons([new i({text:BX.message("BTN_MESSAGE_SEND_PROPS"),events:{click:BX.delegate(this.sendToBasket,this)}})]);this.obPopupWin.show()}else{this.sendToBasket()}break;case 3:this.sendToBasket();break}},basketResult:function(t){var e="",s="",r,a=[];if(this.obPopupWin)this.obPopupWin.close();if(!BX.type.isPlainObject(t))return;r=t.STATUS==="OK";if(r){this.setAnalyticsDataLayer("addToCart")}if(r&&this.basketAction==="BUY"){this.basketRedirect()}else{this.initPopupWindow();if(r){BX.onCustomEvent("OnBasketChange");if(BX.findParent(this.obProduct,{className:"bx_sale_gift_main_products"},10)){BX.onCustomEvent("onAddToBasketMainProduct",[this])}switch(this.productType){case 1:case 2:case 7:s=this.product.pict.SRC;break;case 3:s=this.offers[this.offerNum].PREVIEW_PICTURE?this.offers[this.offerNum].PREVIEW_PICTURE.SRC:this.defaultPict.pict.SRC;break}e='<div style="width: 100%; margin: 0; text-align: center;"><img src="'+s+'" height="130" style="max-height:130px"><p>'+this.product.name+"</p></div>";if(this.showClosePopup){a=[new i({text:BX.message("BTN_MESSAGE_BASKET_REDIRECT"),events:{click:BX.delegate(this.basketRedirect,this)},style:{marginRight:"10px"}}),new i({text:BX.message("BTN_MESSAGE_CLOSE_POPUP"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}else{a=[new i({text:BX.message("BTN_MESSAGE_BASKET_REDIRECT"),events:{click:BX.delegate(this.basketRedirect,this)}})]}}else{e='<div style="width: 100%; margin: 0; text-align: center;"><p>'+(t.MESSAGE?t.MESSAGE:BX.message("BASKET_UNKNOWN_ERROR"))+"</p></div>";a=[new i({text:BX.message("BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}this.obPopupWin.setTitleBar(r?BX.message("TITLE_SUCCESSFUL"):BX.message("TITLE_ERROR"));this.obPopupWin.setContent(e);this.obPopupWin.setButtons(a);this.obPopupWin.show()}},basketRedirect:function(){location.href=this.basketData.basketUrl?this.basketData.basketUrl:BX.message("BASKET_URL")},initPopupWindow:function(){if(this.obPopupWin)return;this.obPopupWin=BX.PopupWindowManager.create("CatalogSectionBasket_"+this.visual.ID,null,{autoHide:true,offsetLeft:0,offsetTop:0,overlay:true,closeByEsc:true,titleBar:true,closeIcon:true,contentColor:"white",className:this.templateTheme?"bx-"+this.templateTheme:""})}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:91:"/local/templates/gn/components/bitrix/catalog.section/.default/script.min.js?17478244265563";s:6:"source";s:72:"/local/templates/gn/components/bitrix/catalog.section/.default/script.js";s:3:"min";s:76:"/local/templates/gn/components/bitrix/catalog.section/.default/script.min.js";s:3:"map";s:76:"/local/templates/gn/components/bitrix/catalog.section/.default/script.map.js";}"*/
(function(){"use strict";if(!!window.JCCatalogSectionComponent)return;window.JCCatalogSectionComponent=function(t){this.formPosting=false;this.siteId=t.siteId||"";this.ajaxId=t.ajaxId||"";this.template=t.template||"";this.componentPath=t.componentPath||"";this.parameters=t.parameters||"";if(t.navParams){this.navParams={NavNum:t.navParams.NavNum||1,NavPageNomer:parseInt(t.navParams.NavPageNomer)||1,NavPageCount:parseInt(t.navParams.NavPageCount)||1}}this.bigData=t.bigData||{enabled:false};this.container=document.querySelector('[data-entity="'+t.container+'"]');this.showMoreButton=null;this.showMoreButtonMessage=null;if(this.bigData.enabled&&BX.util.object_keys(this.bigData.rows).length>0){BX.cookie_prefix=this.bigData.js.cookiePrefix||"";BX.cookie_domain=this.bigData.js.cookieDomain||"";BX.current_server_time=this.bigData.js.serverTime;BX.ready(BX.delegate(this.bigDataLoad,this))}if(t.initiallyShowHeader){BX.ready(BX.delegate(this.showHeader,this))}if(t.deferredLoad){BX.ready(BX.delegate(this.deferredLoad,this))}if(t.lazyLoad){this.showMoreButton=document.querySelector('[data-use="show-more-'+this.navParams.NavNum+'"]');this.showMoreButtonMessage=this.showMoreButton.innerHTML;BX.bind(this.showMoreButton,"click",BX.proxy(this.showMore,this))}if(t.loadOnScroll){BX.bind(window,"scroll",BX.proxy(this.loadOnScroll,this))}};window.JCCatalogSectionComponent.prototype={checkButton:function(){if(this.showMoreButton){if(this.navParams.NavPageNomer==this.navParams.NavPageCount){BX.remove(this.showMoreButton)}else{this.container.appendChild(this.showMoreButton)}}},enableButton:function(){if(this.showMoreButton){BX.removeClass(this.showMoreButton,"disabled");this.showMoreButton.innerHTML=this.showMoreButtonMessage}},disableButton:function(){if(this.showMoreButton){BX.addClass(this.showMoreButton,"disabled");this.showMoreButton.innerHTML=BX.message("BTN_MESSAGE_LAZY_LOAD_WAITER")}},loadOnScroll:function(){var t=BX.GetWindowScrollPos().scrollTop,e=BX.pos(this.container).bottom;if(t+window.innerHeight>e){this.showMore()}},showMore:function(){if(this.navParams.NavPageNomer<this.navParams.NavPageCount){var t={};t["action"]="showMore";t["PAGEN_"+this.navParams.NavNum]=this.navParams.NavPageNomer+1;if(!this.formPosting){this.formPosting=true;this.disableButton();this.sendRequest(t)}}},bigDataLoad:function(){var t="https://analytics.bitrix.info/crecoms/v1_0/recoms.php",e=BX.ajax.prepareData(this.bigData.params);if(e){t+=(t.indexOf("?")!==-1?"&":"?")+e}var a=BX.delegate(function(t){this.sendRequest({action:"deferredLoad",bigData:"Y",items:t&&t.items||[],rid:t&&t.id,count:this.bigData.count,rowsRange:this.bigData.rowsRange,shownIds:this.bigData.shownIds})},this);BX.ajax({method:"GET",dataType:"json",url:t,timeout:3,onsuccess:a,onfailure:a})},deferredLoad:function(){this.sendRequest({action:"deferredLoad"})},sendRequest:function(t){var e={siteId:this.siteId,template:this.template,parameters:this.parameters};if(this.ajaxId){e.AJAX_ID=this.ajaxId}BX.ajax({url:this.componentPath+"/ajax.php"+(document.location.href.indexOf("clear_cache=Y")!==-1?"?clear_cache=Y":""),method:"POST",dataType:"json",timeout:60,data:BX.merge(e,t),onsuccess:BX.delegate(function(e){if(!e||!e.JS)return;BX.ajax.processScripts(BX.processHTML(e.JS).SCRIPT,false,BX.delegate(function(){this.showAction(e,t)},this))},this)})},showAction:function(t,e){if(!e)return;switch(e.action){case"showMore":this.processShowMoreAction(t);break;case"deferredLoad":this.processDeferredLoadAction(t,e.bigData==="Y");break}},processShowMoreAction:function(t){this.formPosting=false;this.enableButton();if(t){this.navParams.NavPageNomer++;this.processItems(t.items);this.processPagination(t.pagination);this.processEpilogue(t.epilogue);this.checkButton()}},processDeferredLoadAction:function(t,e){if(!t)return;var a=e?this.bigData.rows:{};this.processItems(t.items,BX.util.array_keys(a))},processItems:function(t,e){if(!t)return;var a=BX.processHTML(t,false),i=BX.create("DIV");var s,o,n;i.innerHTML=a.HTML;s=i.querySelectorAll('[data-entity="items-row"]');if(s.length){this.showHeader(true);for(o in s){if(s.hasOwnProperty(o)){n=e?this.container.querySelectorAll('[data-entity="items-row"]'):false;s[o].style.opacity=0;if(n&&BX.type.isDomNode(n[e[o]])){n[e[o]].parentNode.insertBefore(s[o],n[e[o]])}else{this.container.appendChild(s[o])}}}new BX.easing({duration:2e3,start:{opacity:0},finish:{opacity:100},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(t){for(var e in s){if(s.hasOwnProperty(e)){s[e].style.opacity=t.opacity/100}}},complete:function(){for(var t in s){if(s.hasOwnProperty(t)){s[t].removeAttribute("style")}}}}).animate()}BX.ajax.processScripts(a.SCRIPT)},processPagination:function(t){if(!t)return;var e=document.querySelectorAll('[data-pagination-num="'+this.navParams.NavNum+'"]');for(var a in e){if(e.hasOwnProperty(a)){e[a].innerHTML=t}}},processEpilogue:function(t){if(!t)return;var e=BX.processHTML(t,false);BX.ajax.processScripts(e.SCRIPT)},showHeader:function(t){var e=BX.findParent(this.container,{attr:{"data-entity":"parent-container"}}),a;if(e&&BX.type.isDomNode(e)){a=e.querySelector('[data-entity="header"]');if(a&&a.getAttribute("data-showed")!="true"){a.style.display="";if(t){new BX.easing({duration:2e3,start:{opacity:0},finish:{opacity:100},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(t){a.style.opacity=t.opacity/100},complete:function(){a.removeAttribute("style");a.setAttribute("data-showed","true")}}).animate()}else{a.style.opacity=100}}}}}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:81:"/local/templates/gn/components/bitrix/catalog.item/sdds/script.js?174843404563933";s:6:"source";s:65:"/local/templates/gn/components/bitrix/catalog.item/sdds/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function (window){
	'use strict';

	if (window.JCCatalogItem)
		return;

	var BasketButton = function(params)
	{
		BasketButton.superclass.constructor.apply(this, arguments);
		this.buttonNode = BX.create('button', {
			props: {className: 'btn btn-primary btn-buy btn-sm', id: this.id},
			style: typeof params.style === 'object' ? params.style : {},
			text: params.text,
			events: this.contextEvents
		});

		if (BX.browser.IsIE())
		{
			this.buttonNode.setAttribute("hideFocus", "hidefocus");
		}
	};
	BX.extend(BasketButton, BX.PopupWindowButton);

	window.JCCatalogItem = function (arParams)
	{
		this.productType = 0;
		this.showQuantity = true;
		this.showAbsent = true;
		this.secondPict = false;
		this.showOldPrice = false;
		this.showMaxQuantity = 'N';
		this.relativeQuantityFactor = 5;
		this.showPercent = false;
		this.showSkuProps = false;
		this.basketAction = 'ADD';
		this.showClosePopup = false;
		this.useCompare = false;
		this.showSubscription = false;
		this.visual = {
			ID: '',
			PICT_ID: '',
			SECOND_PICT_ID: '',
			PICT_SLIDER_ID: '',
			QUANTITY_ID: '',
			QUANTITY_UP_ID: '',
			QUANTITY_DOWN_ID: '',
			PRICE_ID: '',
			PRICE_OLD_ID: '',
			DSC_PERC: '',
			SECOND_DSC_PERC: '',
			DISPLAY_PROP_DIV: '',
			BASKET_PROP_DIV: '',
			SUBSCRIBE_ID: ''
		};
		this.product = {
			checkQuantity: false,
			maxQuantity: 0,
			stepQuantity: 1,
			isDblQuantity: false,
			canBuy: true,
			name: '',
			pict: {},
			id: 0,
			addUrl: '',
			buyUrl: ''
		};

		this.basketMode = '';
		this.basketData = {
			useProps: false,
			emptyProps: false,
			quantity: 'quantity',
			props: 'prop',
			basketUrl: '',
			sku_props: '',
			sku_props_var: 'basket_props',
			add_url: '',
			buy_url: ''
		};

		this.compareData = {
			compareUrl: '',
			compareDeleteUrl: '',
			comparePath: ''
		};

		this.defaultPict = {
			pict: null,
			secondPict: null
		};

		this.defaultSliderOptions = {
			interval: 3000,
			wrap: true
		};
		this.slider = {
			options: {},
			items: [],
			active: null,
			sliding: null,
			paused: null,
			interval: null,
			progress: null
		};
		this.touch = null;

		this.quantityDelay = null;
		this.quantityTimer = null;

		this.checkQuantity = false;
		this.maxQuantity = 0;
		this.minQuantity = 0;
		this.stepQuantity = 1;
		this.isDblQuantity = false;
		this.canBuy = true;
		this.precision = 6;
		this.precisionFactor = Math.pow(10, this.precision);
		this.bigData = false;
		this.fullDisplayMode = false;
		this.viewMode = '';
		this.templateTheme = '';

		this.currentPriceMode = '';
		this.currentPrices = [];
		this.currentPriceSelected = 0;
		this.currentQuantityRanges = [];
		this.currentQuantityRangeSelected = 0;

		this.offers = [];
		this.offerNum = 0;
		this.treeProps = [];
		this.selectedValues = {};

		this.obProduct = null;
		this.blockNodes = {};
		this.obQuantity = null;
		this.obQuantityUp = null;
		this.obQuantityDown = null;
		this.obQuantityLimit = {};
		this.obPict = null;
		this.obSecondPict = null;
		this.obPictSlider = null;
		this.obPictSliderIndicator = null;
		this.obPrice = null;
		this.obTree = null;
		this.obBuyBtn = null;
		this.obBasketActions = null;
		this.obNotAvail = null;
		this.obSubscribe = null;
		this.obDscPerc = null;
		this.obSecondDscPerc = null;
		this.obSkuProps = null;
		this.obMeasure = null;
		this.obCompare = null;

		this.obPopupWin = null;
		this.basketUrl = '';
		this.basketParams = {};
		this.isTouchDevice = BX.hasClass(document.documentElement, 'bx-touch');
		this.hoverTimer = null;
		this.hoverStateChangeForbidden = false;
		this.mouseX = null;
		this.mouseY = null;

		this.useEnhancedEcommerce = false;
		this.dataLayerName = 'dataLayer';
		this.brandProperty = false;

		this.errorCode = 0;

		if (typeof arParams === 'object')
		{
			if (arParams.PRODUCT_TYPE)
			{
				this.productType = parseInt(arParams.PRODUCT_TYPE, 10);
			}

			this.showQuantity = arParams.SHOW_QUANTITY;
			this.showAbsent = arParams.SHOW_ABSENT;
			this.secondPict = arParams.SECOND_PICT;
			this.showOldPrice = arParams.SHOW_OLD_PRICE;
			this.showMaxQuantity = arParams.SHOW_MAX_QUANTITY;
			this.relativeQuantityFactor = parseInt(arParams.RELATIVE_QUANTITY_FACTOR);
			this.showPercent = arParams.SHOW_DISCOUNT_PERCENT;
			this.showSkuProps = arParams.SHOW_SKU_PROPS;
			this.showSubscription = arParams.USE_SUBSCRIBE;

			if (arParams.ADD_TO_BASKET_ACTION)
			{
				this.basketAction = arParams.ADD_TO_BASKET_ACTION;
			}

			this.showClosePopup = arParams.SHOW_CLOSE_POPUP;
			this.useCompare = arParams.DISPLAY_COMPARE;
			this.fullDisplayMode = arParams.PRODUCT_DISPLAY_MODE === 'Y';
			this.bigData = arParams.BIG_DATA;
			this.viewMode = arParams.VIEW_MODE || '';
			this.templateTheme = arParams.TEMPLATE_THEME || '';
			this.useEnhancedEcommerce = arParams.USE_ENHANCED_ECOMMERCE === 'Y';
			this.dataLayerName = arParams.DATA_LAYER_NAME;
			this.brandProperty = arParams.BRAND_PROPERTY;

			this.visual = arParams.VISUAL;

			switch (this.productType)
			{
				case 0: // no catalog
				case 1: // product
				case 2: // set
				case 7: // service
					if (arParams.PRODUCT && typeof arParams.PRODUCT === 'object')
					{
						this.currentPriceMode = arParams.PRODUCT.ITEM_PRICE_MODE;
						this.currentPrices = arParams.PRODUCT.ITEM_PRICES;
						this.currentPriceSelected = arParams.PRODUCT.ITEM_PRICE_SELECTED;
						this.currentQuantityRanges = arParams.PRODUCT.ITEM_QUANTITY_RANGES;
						this.currentQuantityRangeSelected = arParams.PRODUCT.ITEM_QUANTITY_RANGE_SELECTED;

						if (this.showQuantity)
						{
							this.product.checkQuantity = arParams.PRODUCT.CHECK_QUANTITY;
							this.product.isDblQuantity = arParams.PRODUCT.QUANTITY_FLOAT;

							if (this.product.checkQuantity)
							{
								this.product.maxQuantity = (this.product.isDblQuantity ? parseFloat(arParams.PRODUCT.MAX_QUANTITY) : parseInt(arParams.PRODUCT.MAX_QUANTITY, 10));
							}

							this.product.stepQuantity = (this.product.isDblQuantity ? parseFloat(arParams.PRODUCT.STEP_QUANTITY) : parseInt(arParams.PRODUCT.STEP_QUANTITY, 10));

							this.checkQuantity = this.product.checkQuantity;
							this.isDblQuantity = this.product.isDblQuantity;
							this.stepQuantity = this.product.stepQuantity;
							this.maxQuantity = this.product.maxQuantity;
							this.minQuantity = this.currentPriceMode === 'Q'
								? parseFloat(this.currentPrices[this.currentPriceSelected].MIN_QUANTITY)
								: this.stepQuantity;

							if (this.isDblQuantity)
							{
								this.stepQuantity = Math.round(this.stepQuantity * this.precisionFactor) / this.precisionFactor;
							}
						}

						this.product.canBuy = arParams.PRODUCT.CAN_BUY;

						if (arParams.PRODUCT.MORE_PHOTO_COUNT)
						{
							this.product.morePhotoCount = arParams.PRODUCT.MORE_PHOTO_COUNT;
							this.product.morePhoto = arParams.PRODUCT.MORE_PHOTO;
						}

						if (arParams.PRODUCT.RCM_ID)
						{
							this.product.rcmId = arParams.PRODUCT.RCM_ID;
						}

						this.canBuy = this.product.canBuy;
						this.product.name = arParams.PRODUCT.NAME;
						this.product.pict = arParams.PRODUCT.PICT;
						this.product.id = arParams.PRODUCT.ID;
						this.product.DETAIL_PAGE_URL = arParams.PRODUCT.DETAIL_PAGE_URL;

						if (arParams.PRODUCT.ADD_URL)
						{
							this.product.addUrl = arParams.PRODUCT.ADD_URL;
						}

						if (arParams.PRODUCT.BUY_URL)
						{
							this.product.buyUrl = arParams.PRODUCT.BUY_URL;
						}

						if (arParams.BASKET && typeof arParams.BASKET === 'object')
						{
							this.basketData.useProps = arParams.BASKET.ADD_PROPS;
							this.basketData.emptyProps = arParams.BASKET.EMPTY_PROPS;
						}
					}
					else
					{
						this.errorCode = -1;
					}

					break;
				case 3: // sku
					if (arParams.PRODUCT && typeof arParams.PRODUCT === 'object')
					{
						this.product.name = arParams.PRODUCT.NAME;
						this.product.id = arParams.PRODUCT.ID;
						this.product.DETAIL_PAGE_URL = arParams.PRODUCT.DETAIL_PAGE_URL;
						this.product.morePhotoCount = arParams.PRODUCT.MORE_PHOTO_COUNT;
						this.product.morePhoto = arParams.PRODUCT.MORE_PHOTO;

						if (arParams.PRODUCT.RCM_ID)
						{
							this.product.rcmId = arParams.PRODUCT.RCM_ID;
						}
					}

					if (arParams.OFFERS && BX.type.isArray(arParams.OFFERS))
					{
						this.offers = arParams.OFFERS;
						this.offerNum = 0;

						if (arParams.OFFER_SELECTED)
						{
							this.offerNum = parseInt(arParams.OFFER_SELECTED, 10);
						}

						if (isNaN(this.offerNum))
						{
							this.offerNum = 0;
						}

						if (arParams.TREE_PROPS)
						{
							this.treeProps = arParams.TREE_PROPS;
						}

						if (arParams.DEFAULT_PICTURE)
						{
							this.defaultPict.pict = arParams.DEFAULT_PICTURE.PICTURE;
							this.defaultPict.secondPict = arParams.DEFAULT_PICTURE.PICTURE_SECOND;
						}
					}

					break;
				default:
					this.errorCode = -1;
			}
			if (arParams.BASKET && typeof arParams.BASKET === 'object')
			{
				if (arParams.BASKET.QUANTITY)
				{
					this.basketData.quantity = arParams.BASKET.QUANTITY;
				}

				if (arParams.BASKET.PROPS)
				{
					this.basketData.props = arParams.BASKET.PROPS;
				}

				if (arParams.BASKET.BASKET_URL)
				{
					this.basketData.basketUrl = arParams.BASKET.BASKET_URL;
				}

				if (3 === this.productType)
				{
					if (arParams.BASKET.SKU_PROPS)
					{
						this.basketData.sku_props = arParams.BASKET.SKU_PROPS;
					}
				}

				if (arParams.BASKET.ADD_URL_TEMPLATE)
				{
					this.basketData.add_url = arParams.BASKET.ADD_URL_TEMPLATE;
				}

				if (arParams.BASKET.BUY_URL_TEMPLATE)
				{
					this.basketData.buy_url = arParams.BASKET.BUY_URL_TEMPLATE;
				}

				if (this.basketData.add_url === '' && this.basketData.buy_url === '')
				{
					this.errorCode = -1024;
				}
			}

			if (this.useCompare)
			{
				if (arParams.COMPARE && typeof arParams.COMPARE === 'object')
				{
					if (arParams.COMPARE.COMPARE_PATH)
					{
						this.compareData.comparePath = arParams.COMPARE.COMPARE_PATH;
					}

					if (arParams.COMPARE.COMPARE_URL_TEMPLATE)
					{
						this.compareData.compareUrl = arParams.COMPARE.COMPARE_URL_TEMPLATE;
					}
					else
					{
						this.useCompare = false;
					}

					if (arParams.COMPARE.COMPARE_DELETE_URL_TEMPLATE)
					{
						this.compareData.compareDeleteUrl = arParams.COMPARE.COMPARE_DELETE_URL_TEMPLATE;
					}
					else
					{
						this.useCompare = false;
					}
				}
				else
				{
					this.useCompare = false;
				}
			}

			this.isFacebookConversionCustomizeProductEventEnabled
				= arParams.IS_FACEBOOK_CONVERSION_CUSTOMIZE_PRODUCT_EVENT_ENABLED
			;
		}

		if (this.errorCode === 0)
		{
			BX.ready(BX.delegate(this.init,this));
		}
	};

	window.JCCatalogItem.prototype = {
		init: function()
		{
			var i = 0,
				treeItems = null;

			this.obProduct = BX(this.visual.ID);
			if (!this.obProduct)
			{
				this.errorCode = -1;
			}

			this.obPict = BX(this.visual.PICT_ID);
			if (!this.obPict)
			{
				this.errorCode = -2;
			}

			if (this.secondPict && this.visual.SECOND_PICT_ID)
			{
				this.obSecondPict = BX(this.visual.SECOND_PICT_ID);
			}

			this.obPictSlider = BX(this.visual.PICT_SLIDER_ID);
			this.obPictSliderIndicator = BX(this.visual.PICT_SLIDER_ID + '_indicator');
			this.obPictSliderProgressBar = BX(this.visual.PICT_SLIDER_ID + '_progress_bar');
			if (!this.obPictSlider)
			{
				this.errorCode = -4;
			}

			this.obPrice = BX(this.visual.PRICE_ID);
			this.obPriceOld = BX(this.visual.PRICE_OLD_ID);
			this.obPriceTotal = BX(this.visual.PRICE_TOTAL_ID);
			if (!this.obPrice)
			{
				this.errorCode = -16;
			}

			if (this.showQuantity && this.visual.QUANTITY_ID)
			{
				this.obQuantity = BX(this.visual.QUANTITY_ID);
				this.blockNodes.quantity = this.obProduct.querySelector('[data-entity="quantity-block"]');

				if (!this.isTouchDevice)
				{
					BX.bind(this.obQuantity, 'focus', BX.proxy(this.onFocus, this));
					BX.bind(this.obQuantity, 'blur', BX.proxy(this.onBlur, this));
				}

				if (this.visual.QUANTITY_UP_ID)
				{
					this.obQuantityUp = BX(this.visual.QUANTITY_UP_ID);
				}

				if (this.visual.QUANTITY_DOWN_ID)
				{
					this.obQuantityDown = BX(this.visual.QUANTITY_DOWN_ID);
				}
			}

			if (this.visual.QUANTITY_LIMIT && this.showMaxQuantity !== 'N')
			{
				this.obQuantityLimit.all = BX(this.visual.QUANTITY_LIMIT);
				if (this.obQuantityLimit.all)
				{
					this.obQuantityLimit.value = this.obQuantityLimit.all.querySelector('[data-entity="quantity-limit-value"]');
					if (!this.obQuantityLimit.value)
					{
						this.obQuantityLimit.all = null;
					}
				}
			}

			if (this.productType === 3 && this.fullDisplayMode)
			{
				if (this.visual.TREE_ID)
				{
					this.obTree = BX(this.visual.TREE_ID);
					if (!this.obTree)
					{
						this.errorCode = -256;
					}
				}

				if (this.visual.QUANTITY_MEASURE)
				{
					this.obMeasure = BX(this.visual.QUANTITY_MEASURE);
				}
			}

			this.obBasketActions = BX(this.visual.BASKET_ACTIONS_ID);
			if (this.obBasketActions)
			{
				if (this.visual.BUY_ID)
				{
					this.obBuyBtn = BX(this.visual.BUY_ID);
				}
			}

			this.obNotAvail = BX(this.visual.NOT_AVAILABLE_MESS);

			if (this.showSubscription)
			{
				this.obSubscribe = BX(this.visual.SUBSCRIBE_ID);
			}

			if (this.showPercent)
			{
				if (this.visual.DSC_PERC)
				{
					this.obDscPerc = BX(this.visual.DSC_PERC);
				}
				if (this.secondPict && this.visual.SECOND_DSC_PERC)
				{
					this.obSecondDscPerc = BX(this.visual.SECOND_DSC_PERC);
				}
			}

			if (this.showSkuProps)
			{
				if (this.visual.DISPLAY_PROP_DIV)
				{
					this.obSkuProps = BX(this.visual.DISPLAY_PROP_DIV);
				}
			}

			if (this.errorCode === 0)
			{
				// product slider events
				if (this.isTouchDevice)
				{
					BX.bind(this.obPictSlider, 'touchstart', BX.proxy(this.touchStartEvent, this));
					BX.bind(this.obPictSlider, 'touchend', BX.proxy(this.touchEndEvent, this));
					BX.bind(this.obPictSlider, 'touchcancel', BX.proxy(this.touchEndEvent, this));
				}
				else
				{
					if (this.viewMode === 'CARD')
					{
						// product hover events
						BX.bind(this.obProduct, 'mouseenter', BX.proxy(this.hoverOn, this));
						BX.bind(this.obProduct, 'mouseleave', BX.proxy(this.hoverOff, this));
					}

					// product slider events
					BX.bind(this.obProduct, 'mouseenter', BX.proxy(this.cycleSlider, this));
					BX.bind(this.obProduct, 'mouseleave', BX.proxy(this.stopSlider, this));
				}

				if (this.bigData)
				{
					var links = BX.findChildren(this.obProduct, {tag:'a'}, true);
					if (links)
					{
						for (i in links)
						{
							if (links.hasOwnProperty(i))
							{
								if (links[i].getAttribute('href') == this.product.DETAIL_PAGE_URL)
								{
									BX.bind(links[i], 'click', BX.proxy(this.rememberProductRecommendation, this));
								}
							}
						}
					}
				}

				if (this.showQuantity)
				{
					var startEventName = this.isTouchDevice ? 'touchstart' : 'mousedown';
					var endEventName = this.isTouchDevice ? 'touchend' : 'mouseup';

					if (this.obQuantityUp)
					{
						BX.bind(this.obQuantityUp, startEventName, BX.proxy(this.startQuantityInterval, this));
						BX.bind(this.obQuantityUp, endEventName, BX.proxy(this.clearQuantityInterval, this));
						BX.bind(this.obQuantityUp, 'mouseout', BX.proxy(this.clearQuantityInterval, this));
						BX.bind(this.obQuantityUp, 'click', BX.delegate(this.quantityUp, this));
					}

					if (this.obQuantityDown)
					{
						BX.bind(this.obQuantityDown, startEventName, BX.proxy(this.startQuantityInterval, this));
						BX.bind(this.obQuantityDown, endEventName, BX.proxy(this.clearQuantityInterval, this));
						BX.bind(this.obQuantityDown, 'mouseout', BX.proxy(this.clearQuantityInterval, this));
						BX.bind(this.obQuantityDown, 'click', BX.delegate(this.quantityDown, this));
					}

					if (this.obQuantity)
					{
						BX.bind(this.obQuantity, 'change', BX.delegate(this.quantityChange, this));
					}
				}

				switch (this.productType)
				{
					case 0: // no catalog
					case 1: // product
					case 2: // set
					case 7: // service
						if (parseInt(this.product.morePhotoCount) > 1 && this.obPictSlider)
						{
							this.initializeSlider();
						}

						this.checkQuantityControls();

						break;
					case 3: // sku
						if (this.offers.length > 0 && this.obTree)
						{
							treeItems = BX.findChildren(this.obTree, {tagName: 'li'}, true);

							if (treeItems && treeItems.length)
							{
								for (i = 0; i < treeItems.length; i++)
								{
									BX.bind(treeItems[i], 'click', BX.delegate(this.selectOfferProp, this));
								}
							}

							this.setCurrent();
						}
						else if (parseInt(this.product.morePhotoCount) > 1 && this.obPictSlider)
						{
							this.initializeSlider();
						}

						break;
				}

				if (this.obBuyBtn)
				{
					if (this.basketAction === 'ADD')
					{
						BX.bind(this.obBuyBtn, 'click', BX.proxy(this.add2Basket, this));
					}
					else
					{
						BX.bind(this.obBuyBtn, 'click', BX.proxy(this.buyBasket, this));
					}
				}

				if (this.useCompare)
				{
					this.obCompare = BX(this.visual.COMPARE_LINK_ID);
					if (this.obCompare)
					{
						BX.bind(this.obCompare, 'click', BX.proxy(this.compare, this));
					}

					BX.addCustomEvent('onCatalogDeleteCompare', BX.proxy(this.checkDeletedCompare, this));
				}
			}
		},

		setAnalyticsDataLayer: function(action)
		{
			if (!this.useEnhancedEcommerce || !this.dataLayerName)
				return;

			var item = {},
				info = {},
				variants = [],
				i, k, j, propId, skuId, propValues;

			switch (this.productType)
			{
				case 0: //no catalog
				case 1: //product
				case 2: //set
				case 7: // service
					item = {
						'id': this.product.id,
						'name': this.product.name,
						'price': this.currentPrices[this.currentPriceSelected] && this.currentPrices[this.currentPriceSelected].PRICE,
						'brand': BX.type.isArray(this.brandProperty) ? this.brandProperty.join('/') : this.brandProperty
					};
					break;
				case 3: //sku
					for (i in this.offers[this.offerNum].TREE)
					{
						if (this.offers[this.offerNum].TREE.hasOwnProperty(i))
						{
							propId = i.substring(5);
							skuId = this.offers[this.offerNum].TREE[i];

							for (k in this.treeProps)
							{
								if (this.treeProps.hasOwnProperty(k) && this.treeProps[k].ID == propId)
								{
									for (j in this.treeProps[k].VALUES)
									{
										propValues = this.treeProps[k].VALUES[j];
										if (propValues.ID == skuId)
										{
											variants.push(propValues.NAME);
											break;
										}
									}

								}
							}
						}
					}

					item = {
						'id': this.offers[this.offerNum].ID,
						'name': this.offers[this.offerNum].NAME,
						'price': this.currentPrices[this.currentPriceSelected] && this.currentPrices[this.currentPriceSelected].PRICE,
						'brand': BX.type.isArray(this.brandProperty) ? this.brandProperty.join('/') : this.brandProperty,
						'variant': variants.join('/')
					};
					break;
			}

			switch (action)
			{
				case 'addToCart':
					info = {
						'ecommerce': {
							'currencyCode': this.currentPrices[this.currentPriceSelected] && this.currentPrices[this.currentPriceSelected].CURRENCY || '',
							'add': {
								'products': [{
									'name': item.name || '',
									'id': item.id || '',
									'price': item.price || 0,
									'brand': item.brand || '',
									'category': item.category || '',
									'variant': item.variant || '',
									'quantity': this.showQuantity && this.obQuantity ? this.obQuantity.value : 1
								}]
							}
						}
					};
					break;
			}

			window[this.dataLayerName] = window[this.dataLayerName] || [];
			window[this.dataLayerName].push(info);
		},

		hoverOn: function(event)
		{
			clearTimeout(this.hoverTimer);
			this.obProduct.style.height = getComputedStyle(this.obProduct).height;
			BX.addClass(this.obProduct, 'hover');

			BX.PreventDefault(event);
		},

		hoverOff: function(event)
		{
			if (this.hoverStateChangeForbidden)
				return;

			BX.removeClass(this.obProduct, 'hover');
			this.hoverTimer = setTimeout(
				BX.delegate(function(){
					this.obProduct.style.height = 'auto';
				}, this),
				300
			);

			BX.PreventDefault(event);
		},

		onFocus: function()
		{
			this.hoverStateChangeForbidden = true;
			BX.bind(document, 'mousemove', BX.proxy(this.captureMousePosition, this));
		},

		onBlur: function()
		{
			this.hoverStateChangeForbidden = false;
			BX.unbind(document, 'mousemove', BX.proxy(this.captureMousePosition, this));

			var cursorElement = document.elementFromPoint(this.mouseX, this.mouseY);
			if (!cursorElement || !this.obProduct.contains(cursorElement))
			{
				this.hoverOff();
			}
		},

		captureMousePosition: function(event)
		{
			this.mouseX = event.clientX;
			this.mouseY = event.clientY;
		},

		getCookie: function(name)
		{
			var matches = document.cookie.match(new RegExp(
				"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
			));

			return matches ? decodeURIComponent(matches[1]) : null;
		},

		rememberProductRecommendation: function()
		{
			// save to RCM_PRODUCT_LOG
			var cookieName = BX.cookie_prefix + '_RCM_PRODUCT_LOG',
				cookie = this.getCookie(cookieName),
				itemFound = false;

			var cItems = [],
				cItem;

			if (cookie)
			{
				cItems = cookie.split('.');
			}

			var i = cItems.length;

			while (i--)
			{
				cItem = cItems[i].split('-');

				if (cItem[0] == this.product.id)
				{
					// it's already in recommendations, update the date
					cItem = cItems[i].split('-');

					// update rcmId and date
					cItem[1] = this.product.rcmId;
					cItem[2] = BX.current_server_time;

					cItems[i] = cItem.join('-');
					itemFound = true;
				}
				else
				{
					if ((BX.current_server_time - cItem[2]) > 3600 * 24 * 30)
					{
						cItems.splice(i, 1);
					}
				}
			}

			if (!itemFound)
			{
				// add recommendation
				cItems.push([this.product.id, this.product.rcmId, BX.current_server_time].join('-'));
			}

			// serialize
			var plNewCookie = cItems.join('.'),
				cookieDate = new Date(new Date().getTime() + 1000 * 3600 * 24 * 365 * 10).toUTCString();

			document.cookie = cookieName + "=" + plNewCookie + "; path=/; expires=" + cookieDate + "; domain=" + BX.cookie_domain;
		},

		startQuantityInterval: function()
		{
			var target = BX.proxy_context;
			var func = target.id === this.visual.QUANTITY_DOWN_ID
				? BX.proxy(this.quantityDown, this)
				: BX.proxy(this.quantityUp, this);

			this.quantityDelay = setTimeout(
				BX.delegate(function() {
					this.quantityTimer = setInterval(func, 150);
				}, this),
				300
			);
		},

		clearQuantityInterval: function()
		{
			clearTimeout(this.quantityDelay);
			clearInterval(this.quantityTimer);
		},

		quantityUp: function()
		{
			var curValue = 0,
				boolSet = true;

			if (this.errorCode === 0 && this.showQuantity && this.canBuy)
			{
				curValue = (this.isDblQuantity ? parseFloat(this.obQuantity.value) : parseInt(this.obQuantity.value, 10));
				if (!isNaN(curValue))
				{
					curValue += this.stepQuantity;
					if (this.checkQuantity)
					{
						if (curValue > this.maxQuantity)
						{
							boolSet = false;
						}
					}

					if (boolSet)
					{
						if (this.isDblQuantity)
						{
							curValue = Math.round(curValue * this.precisionFactor) / this.precisionFactor;
						}

						this.obQuantity.value = curValue;

						this.setPrice();
					}
				}
			}
		},

		quantityDown: function()
		{
			var curValue = 0,
				boolSet = true;

			if (this.errorCode === 0 && this.showQuantity && this.canBuy)
			{
				curValue = (this.isDblQuantity ? parseFloat(this.obQuantity.value) : parseInt(this.obQuantity.value, 10));
				if (!isNaN(curValue))
				{
					curValue -= this.stepQuantity;

					this.checkPriceRange(curValue);

					if (curValue < this.minQuantity)
					{
						boolSet = false;
					}

					if (boolSet)
					{
						if (this.isDblQuantity)
						{
							curValue = Math.round(curValue * this.precisionFactor) / this.precisionFactor;
						}

						this.obQuantity.value = curValue;

						this.setPrice();
					}
				}
			}
		},

		quantityChange: function()
		{
			var curValue = 0,
				intCount;

			if (this.errorCode === 0 && this.showQuantity)
			{
				if (this.canBuy)
				{
					curValue = this.isDblQuantity ? parseFloat(this.obQuantity.value) : Math.round(this.obQuantity.value);
					if (!isNaN(curValue))
					{
						if (this.checkQuantity)
						{
							if (curValue > this.maxQuantity)
							{
								curValue = this.maxQuantity;
							}
						}

						this.checkPriceRange(curValue);

						intCount = Math.floor(
							Math.round(curValue * this.precisionFactor / this.stepQuantity) / this.precisionFactor
						) || 1;
						curValue = (intCount <= 1 ? this.stepQuantity : intCount * this.stepQuantity);
						curValue = Math.round(curValue * this.precisionFactor) / this.precisionFactor;

						if (curValue < this.minQuantity)
						{
							curValue = this.minQuantity;
						}

						this.obQuantity.value = curValue;
					}
					else
					{
						this.obQuantity.value = this.minQuantity;
					}
				}
				else
				{
					this.obQuantity.value = this.minQuantity;
				}

				this.setPrice();
			}
		},

		quantitySet: function(index)
		{
			var resetQuantity, strLimit;

			var newOffer = this.offers[index],
				oldOffer = this.offers[this.offerNum];

			if (this.errorCode === 0)
			{
				this.canBuy = newOffer.CAN_BUY;

				this.currentPriceMode = newOffer.ITEM_PRICE_MODE;
				this.currentPrices = newOffer.ITEM_PRICES;
				this.currentPriceSelected = newOffer.ITEM_PRICE_SELECTED;
				this.currentQuantityRanges = newOffer.ITEM_QUANTITY_RANGES;
				this.currentQuantityRangeSelected = newOffer.ITEM_QUANTITY_RANGE_SELECTED;

				if (this.canBuy)
				{
					if (this.blockNodes.quantity)
					{
						BX.style(this.blockNodes.quantity, 'display', '');
					}

					if (this.obBasketActions)
					{
						BX.style(this.obBasketActions, 'display', '');
					}

					if (this.obNotAvail)
					{
						BX.style(this.obNotAvail, 'display', 'none');
					}

					if (this.obSubscribe)
					{
						BX.style(this.obSubscribe, 'display', 'none');
					}
				}
				else
				{
					if (this.blockNodes.quantity)
					{
						BX.style(this.blockNodes.quantity, 'display', 'none');
					}

					if (this.obBasketActions)
					{
						BX.style(this.obBasketActions, 'display', 'none');
					}

					if (this.obNotAvail)
					{
						BX.style(this.obNotAvail, 'display', '');
					}

					if (this.obSubscribe)
					{
						if (newOffer.CATALOG_SUBSCRIBE === 'Y')
						{
							BX.style(this.obSubscribe, 'display', '');
							this.obSubscribe.setAttribute('data-item', newOffer.ID);
							BX(this.visual.SUBSCRIBE_ID + '_hidden').click();
						}
						else
						{
							BX.style(this.obSubscribe, 'display', 'none');
						}
					}
				}

				this.isDblQuantity = newOffer.QUANTITY_FLOAT;
				this.checkQuantity = newOffer.CHECK_QUANTITY;

				if (this.isDblQuantity)
				{
					this.stepQuantity = Math.round(parseFloat(newOffer.STEP_QUANTITY) * this.precisionFactor) / this.precisionFactor;
					this.maxQuantity = parseFloat(newOffer.MAX_QUANTITY);
					this.minQuantity = this.currentPriceMode === 'Q' ? parseFloat(this.currentPrices[this.currentPriceSelected].MIN_QUANTITY) : this.stepQuantity;
				}
				else
				{
					this.stepQuantity = parseInt(newOffer.STEP_QUANTITY, 10);
					this.maxQuantity = parseInt(newOffer.MAX_QUANTITY, 10);
					this.minQuantity = this.currentPriceMode === 'Q' ? parseInt(this.currentPrices[this.currentPriceSelected].MIN_QUANTITY) : this.stepQuantity;
				}

				if (this.showQuantity)
				{
					var isDifferentMinQuantity = oldOffer.ITEM_PRICES.length
						&& oldOffer.ITEM_PRICES[oldOffer.ITEM_PRICE_SELECTED]
						&& oldOffer.ITEM_PRICES[oldOffer.ITEM_PRICE_SELECTED].MIN_QUANTITY != this.minQuantity;

					if (this.isDblQuantity)
					{
						resetQuantity = Math.round(parseFloat(oldOffer.STEP_QUANTITY) * this.precisionFactor) / this.precisionFactor !== this.stepQuantity
							|| isDifferentMinQuantity
							|| oldOffer.MEASURE !== newOffer.MEASURE
							|| (
								this.checkQuantity
								&& parseFloat(oldOffer.MAX_QUANTITY) > this.maxQuantity
								&& parseFloat(this.obQuantity.value) > this.maxQuantity
							);
					}
					else
					{
						resetQuantity = parseInt(oldOffer.STEP_QUANTITY, 10) !== this.stepQuantity
							|| isDifferentMinQuantity
							|| oldOffer.MEASURE !== newOffer.MEASURE
							|| (
								this.checkQuantity
								&& parseInt(oldOffer.MAX_QUANTITY, 10) > this.maxQuantity
								&& parseInt(this.obQuantity.value, 10) > this.maxQuantity
							);
					}

					this.obQuantity.disabled = !this.canBuy;

					if (resetQuantity)
					{
						this.obQuantity.value = this.minQuantity;
					}

					if (this.obMeasure)
					{
						if (newOffer.MEASURE)
						{
							BX.adjust(this.obMeasure, {html: newOffer.MEASURE});
						}
						else
						{
							BX.adjust(this.obMeasure, {html: ''});
						}
					}
				}

				if (this.obQuantityLimit.all)
				{
					if (!this.checkQuantity || this.maxQuantity == 0)
					{
						BX.adjust(this.obQuantityLimit.value, {html: ''});
						BX.adjust(this.obQuantityLimit.all, {style: {display: 'none'}});
					}
					else
					{
						if (this.showMaxQuantity === 'M')
						{
							strLimit = (this.maxQuantity / this.stepQuantity >= this.relativeQuantityFactor)
								? BX.message('RELATIVE_QUANTITY_MANY')
								: BX.message('RELATIVE_QUANTITY_FEW');
						}
						else
						{
							strLimit = this.maxQuantity;

							if (newOffer.MEASURE)
							{
								strLimit += (' ' + newOffer.MEASURE);
							}
						}

						BX.adjust(this.obQuantityLimit.value, {html: strLimit});
						BX.adjust(this.obQuantityLimit.all, {style: {display: ''}});
					}
				}
			}
		},

		initializeSlider: function()
		{
			var wrap = this.obPictSlider.getAttribute('data-slider-wrap');
			if (wrap)
			{
				this.slider.options.wrap = wrap === 'true';
			}
			else
			{
				this.slider.options.wrap = this.defaultSliderOptions.wrap;
			}

			if (this.isTouchDevice)
			{
				this.slider.options.interval = false;
			}
			else
			{
				this.slider.options.interval = parseInt(this.obPictSlider.getAttribute('data-slider-interval')) || this.defaultSliderOptions.interval;
				// slider interval must be more than 700ms because of css transitions
				if (this.slider.options.interval < 700)
				{
					this.slider.options.interval = 700;
				}

				if (this.obPictSliderIndicator)
				{
					var controls = this.obPictSliderIndicator.querySelectorAll('[data-go-to]');
					for (var i in controls)
					{
						if (controls.hasOwnProperty(i))
						{
							BX.bind(controls[i], 'click', BX.proxy(this.sliderClickHandler, this));
						}
					}
				}

				if (this.obPictSliderProgressBar)
				{
					if (this.slider.progress)
					{
						this.resetProgress();
						this.cycleSlider();
					}
					else
					{
						this.slider.progress = new BX.easing({
							transition: BX.easing.transitions.linear,
							step: BX.delegate(function(state){
								this.obPictSliderProgressBar.style.width = state.width / 10 + '%';
							}, this)
						});
					}
				}
			}
		},

		checkTouch: function(event)
		{
			if (!event || !event.changedTouches)
				return false;

			return event.changedTouches[0].identifier === this.touch.identifier;
		},

		touchStartEvent: function(event)
		{
			if (event.touches.length != 1)
				return;

			this.touch = event.changedTouches[0];
		},

		touchEndEvent: function(event)
		{
			if (!this.checkTouch(event))
				return;

			var deltaX = this.touch.pageX - event.changedTouches[0].pageX,
				deltaY = this.touch.pageY - event.changedTouches[0].pageY;

			if (Math.abs(deltaX) >= Math.abs(deltaY) + 10)
			{
				if (deltaX > 0)
				{
					this.slideNext();
				}

				if (deltaX < 0)
				{
					this.slidePrev();
				}
			}
		},

		sliderClickHandler: function(event)
		{
			var target = BX.getEventTarget(event),
				slideIndex = target.getAttribute('data-go-to');

			if (slideIndex)
			{
				this.slideTo(slideIndex)
			}

			BX.PreventDefault(event);
		},

		slideNext: function()
		{
			if (this.slider.sliding)
				return;

			return this.slide('next');
		},

		slidePrev: function()
		{
			if (this.slider.sliding)
				return;

			return this.slide('prev');
		},

		slideTo: function(pos)
		{
			this.slider.active = BX.findChild(this.obPictSlider, {className: 'item active'}, true, false);
			this.slider.progress && (this.slider.interval = true);

			var activeIndex = this.getItemIndex(this.slider.active);

			if (pos > (this.slider.items.length - 1) || pos < 0)
				return;

			if (this.slider.sliding)
				return false;

			if (activeIndex == pos)
			{
				this.stopSlider();
				this.cycleSlider();
				return;
			}

			return this.slide(pos > activeIndex ? 'next' : 'prev', this.eq(this.slider.items, pos));
		},

		slide: function(type, next)
		{
			var active = BX.findChild(this.obPictSlider, {className: 'item active'}, true, false),
				isCycling = this.slider.interval,
				direction = type === 'next' ? 'left' : 'right';

			next = next || this.getItemForDirection(type, active);

			if (BX.hasClass(next, 'active'))
			{
				return (this.slider.sliding = false);
			}

			this.slider.sliding = true;

			isCycling && this.stopSlider();

			if (this.obPictSliderIndicator)
			{
				BX.removeClass(this.obPictSliderIndicator.querySelector('.active'), 'active');
				var nextIndicator = this.obPictSliderIndicator.querySelectorAll('[data-go-to]')[this.getItemIndex(next)];
				nextIndicator && BX.addClass(nextIndicator, 'active');
			}

			if (BX.hasClass(this.obPictSlider, 'slide') && !BX.browser.IsIE())
			{
				var self = this;
				BX.addClass(next, type);
				next.offsetWidth; // force reflow
				BX.addClass(active, direction);
				BX.addClass(next, direction);
				setTimeout(function() {
					BX.addClass(next, 'active');
					BX.removeClass(active, 'active');
					BX.removeClass(active, direction);
					BX.removeClass(next, type);
					BX.removeClass(next, direction);
					self.slider.sliding = false;
				}, 700);
			}
			else
			{
				BX.addClass(next, 'active');
				this.slider.sliding = false;
			}

			this.obPictSliderProgressBar && this.resetProgress();
			isCycling && this.cycleSlider();
		},

		stopSlider: function(event)
		{
			event || (this.slider.paused = true);

			this.slider.interval && clearInterval(this.slider.interval);

			if (this.slider.progress)
			{
				this.slider.progress.stop();

				var width = parseInt(this.obPictSliderProgressBar.style.width);

				this.slider.progress.options.duration = this.slider.options.interval * width / 200;
				this.slider.progress.options.start = {width: width * 10};
				this.slider.progress.options.finish = {width: 0};
				this.slider.progress.options.complete = null;
				this.slider.progress.animate();
			}
		},

		cycleSlider: function(event)
		{
			event || (this.slider.paused = false);

			this.slider.interval && clearInterval(this.slider.interval);

			if (this.slider.options.interval && !this.slider.paused)
			{
				if (this.slider.progress)
				{
					this.slider.progress.stop();

					var width = parseInt(this.obPictSliderProgressBar.style.width);

					this.slider.progress.options.duration = this.slider.options.interval * (100 - width) / 100;
					this.slider.progress.options.start = {width: width * 10};
					this.slider.progress.options.finish = {width: 1000};
					this.slider.progress.options.complete = BX.delegate(function(){
						this.slider.interval = true;
						this.slideNext();
					}, this);
					this.slider.progress.animate();
				}
				else
				{
					this.slider.interval = setInterval(BX.proxy(this.slideNext, this), this.slider.options.interval);
				}
			}
		},

		resetProgress: function()
		{
			this.slider.progress && this.slider.progress.stop();
			this.obPictSliderProgressBar.style.width = 0;
		},

		getItemForDirection: function(direction, active)
		{
			var activeIndex = this.getItemIndex(active),
				willWrap = direction === 'prev' && activeIndex === 0
					|| direction === 'next' && activeIndex == (this.slider.items.length - 1);

			if (willWrap && !this.slider.options.wrap)
				return active;

			var delta = direction === 'prev' ? -1 : 1,
				itemIndex = (activeIndex + delta) % this.slider.items.length;

			return this.eq(this.slider.items, itemIndex);
		},

		getItemIndex: function(item)
		{
			this.slider.items = BX.findChildren(item.parentNode, {className: 'item'}, true);

			return this.slider.items.indexOf(item || this.slider.active);
		},

		eq: function(obj, i)
		{
			var len = obj.length,
				j = +i + (i < 0 ? len : 0);

			return j >= 0 && j < len ? obj[j] : {};
		},

		selectOfferProp: function()
		{
			var i = 0,
				value = '',
				strTreeValue = '',
				arTreeItem = [],
				rowItems = null,
				target = BX.proxy_context;

			if (target && target.hasAttribute('data-treevalue'))
			{
				if (BX.hasClass(target, 'selected'))
					return;

				strTreeValue = target.getAttribute('data-treevalue');
				arTreeItem = strTreeValue.split('_');
				if (this.searchOfferPropIndex(arTreeItem[0], arTreeItem[1]))
				{
					rowItems = BX.findChildren(target.parentNode, {tagName: 'li'}, false);
					if (rowItems && 0 < rowItems.length)
					{
						for (i = 0; i < rowItems.length; i++)
						{
							value = rowItems[i].getAttribute('data-onevalue');
							if (value === arTreeItem[1])
							{
								BX.addClass(rowItems[i], 'selected');
							}
							else
							{
								BX.removeClass(rowItems[i], 'selected');
							}
						}
					}

					if (
						this.isFacebookConversionCustomizeProductEventEnabled
						&& BX.Type.isArrayFilled(this.offers)
						&& BX.Type.isObject(this.offers[this.offerNum])
					)
					{
						BX.ajax.runAction(
							'sale.facebookconversion.customizeProduct',
							{
								data: {
									offerId: this.offers[this.offerNum]['ID']
								}
							}
						);
					}
				}
			}
		},

		searchOfferPropIndex: function(strPropID, strPropValue)
		{
			var strName = '',
				arShowValues = false,
				i, j,
				arCanBuyValues = [],
				allValues = [],
				index = -1,
				arFilter = {},
				tmpFilter = [];

			for (i = 0; i < this.treeProps.length; i++)
			{
				if (this.treeProps[i].ID === strPropID)
				{
					index = i;
					break;
				}
			}

			if (-1 < index)
			{
				for (i = 0; i < index; i++)
				{
					strName = 'PROP_'+this.treeProps[i].ID;
					arFilter[strName] = this.selectedValues[strName];
				}
				strName = 'PROP_'+this.treeProps[index].ID;
				arShowValues = this.getRowValues(arFilter, strName);
				if (!arShowValues)
				{
					return false;
				}
				if (!BX.util.in_array(strPropValue, arShowValues))
				{
					return false;
				}
				arFilter[strName] = strPropValue;
				for (i = index+1; i < this.treeProps.length; i++)
				{
					strName = 'PROP_'+this.treeProps[i].ID;
					arShowValues = this.getRowValues(arFilter, strName);
					if (!arShowValues)
					{
						return false;
					}
					allValues = [];
					if (this.showAbsent)
					{
						arCanBuyValues = [];
						tmpFilter = [];
						tmpFilter = BX.clone(arFilter, true);
						for (j = 0; j < arShowValues.length; j++)
						{
							tmpFilter[strName] = arShowValues[j];
							allValues[allValues.length] = arShowValues[j];
							if (this.getCanBuy(tmpFilter))
								arCanBuyValues[arCanBuyValues.length] = arShowValues[j];
						}
					}
					else
					{
						arCanBuyValues = arShowValues;
					}
					if (this.selectedValues[strName] && BX.util.in_array(this.selectedValues[strName], arCanBuyValues))
					{
						arFilter[strName] = this.selectedValues[strName];
					}
					else
					{
						if (this.showAbsent)
							arFilter[strName] = (arCanBuyValues.length > 0 ? arCanBuyValues[0] : allValues[0]);
						else
							arFilter[strName] = arCanBuyValues[0];
					}
					this.updateRow(i, arFilter[strName], arShowValues, arCanBuyValues);
				}
				this.selectedValues = arFilter;
				this.changeInfo();
			}
			return true;
		},

		updateRow: function(intNumber, activeID, showID, canBuyID)
		{
			var i = 0,
				value = '',
				isCurrent = false,
				rowItems = null;

			var lineContainer = this.obTree.querySelectorAll('[data-entity="sku-line-block"]'),
				listContainer;

			if (intNumber > -1 && intNumber < lineContainer.length)
			{
				listContainer = lineContainer[intNumber].querySelector('ul');
				rowItems = BX.findChildren(listContainer, {tagName: 'li'}, false);
				if (rowItems && 0 < rowItems.length)
				{
					for (i = 0; i < rowItems.length; i++)
					{
						value = rowItems[i].getAttribute('data-onevalue');
						isCurrent = value === activeID;

						if (isCurrent)
						{
							BX.addClass(rowItems[i], 'selected');
						}
						else
						{
							BX.removeClass(rowItems[i], 'selected');
						}

						if (BX.util.in_array(value, canBuyID))
						{
							BX.removeClass(rowItems[i], 'notallowed');
						}
						else
						{
							BX.addClass(rowItems[i], 'notallowed');
						}

						rowItems[i].style.display = BX.util.in_array(value, showID) ? '' : 'none';

						if (isCurrent)
						{
							lineContainer[intNumber].style.display = (value == 0 && canBuyID.length == 1) ? 'none' : '';
						}
					}
				}
			}
		},

		getRowValues: function(arFilter, index)
		{
			var i = 0,
				j,
				arValues = [],
				boolSearch = false,
				boolOneSearch = true;

			if (0 === arFilter.length)
			{
				for (i = 0; i < this.offers.length; i++)
				{
					if (!BX.util.in_array(this.offers[i].TREE[index], arValues))
					{
						arValues[arValues.length] = this.offers[i].TREE[index];
					}
				}
				boolSearch = true;
			}
			else
			{
				for (i = 0; i < this.offers.length; i++)
				{
					boolOneSearch = true;
					for (j in arFilter)
					{
						if (arFilter[j] !== this.offers[i].TREE[j])
						{
							boolOneSearch = false;
							break;
						}
					}
					if (boolOneSearch)
					{
						if (!BX.util.in_array(this.offers[i].TREE[index], arValues))
						{
							arValues[arValues.length] = this.offers[i].TREE[index];
						}
						boolSearch = true;
					}
				}
			}
			return (boolSearch ? arValues : false);
		},

		getCanBuy: function(arFilter)
		{
			var i, j,
				boolSearch = false,
				boolOneSearch = true;

			for (i = 0; i < this.offers.length; i++)
			{
				boolOneSearch = true;
				for (j in arFilter)
				{
					if (arFilter[j] !== this.offers[i].TREE[j])
					{
						boolOneSearch = false;
						break;
					}
				}
				if (boolOneSearch)
				{
					if (this.offers[i].CAN_BUY)
					{
						boolSearch = true;
						break;
					}
				}
			}

			return boolSearch;
		},

		setCurrent: function()
		{
			var i,
				j = 0,
				arCanBuyValues = [],
				strName = '',
				arShowValues = false,
				arFilter = {},
				tmpFilter = [],
				current = this.offers[this.offerNum].TREE;

			for (i = 0; i < this.treeProps.length; i++)
			{
				strName = 'PROP_'+this.treeProps[i].ID;
				arShowValues = this.getRowValues(arFilter, strName);
				if (!arShowValues)
				{
					break;
				}
				if (BX.util.in_array(current[strName], arShowValues))
				{
					arFilter[strName] = current[strName];
				}
				else
				{
					arFilter[strName] = arShowValues[0];
					this.offerNum = 0;
				}
				if (this.showAbsent)
				{
					arCanBuyValues = [];
					tmpFilter = [];
					tmpFilter = BX.clone(arFilter, true);
					for (j = 0; j < arShowValues.length; j++)
					{
						tmpFilter[strName] = arShowValues[j];
						if (this.getCanBuy(tmpFilter))
						{
							arCanBuyValues[arCanBuyValues.length] = arShowValues[j];
						}
					}
				}
				else
				{
					arCanBuyValues = arShowValues;
				}
				this.updateRow(i, arFilter[strName], arShowValues, arCanBuyValues);
			}
			this.selectedValues = arFilter;
			this.changeInfo();
		},

		changeInfo: function()
		{
			var i, j,
				index = -1,
				boolOneSearch = true,
				quantityChanged;

			for (i = 0; i < this.offers.length; i++)
			{
				boolOneSearch = true;
				for (j in this.selectedValues)
				{
					if (this.selectedValues[j] !== this.offers[i].TREE[j])
					{
						boolOneSearch = false;
						break;
					}
				}
				if (boolOneSearch)
				{
					index = i;
					break;
				}
			}
			if (index > -1)
			{
				if (parseInt(this.offers[index].MORE_PHOTO_COUNT) > 1 && this.obPictSlider)
				{
					// hide pict and second_pict containers
					if (this.obPict)
					{
						this.obPict.style.display = 'none';
					}

					if (this.obSecondPict)
					{
						this.obSecondPict.style.display = 'none';
					}

					// clear slider container
					BX.cleanNode(this.obPictSlider);

					// fill slider container with slides
					for (i in this.offers[index].MORE_PHOTO)
					{
						if (this.offers[index].MORE_PHOTO.hasOwnProperty(i))
						{
							this.obPictSlider.appendChild(
								BX.create('SPAN', {
									props: {className: 'product-item-image-slide item' + (i == 0 ? ' active' : '')},
									style: {backgroundImage: 'url(\'' + this.offers[index].MORE_PHOTO[i].SRC + '\')'}
								})
							);
						}
					}

					// fill slider indicator if exists
					if (this.obPictSliderIndicator)
					{
						BX.cleanNode(this.obPictSliderIndicator);

						for (i in this.offers[index].MORE_PHOTO)
						{
							if (this.offers[index].MORE_PHOTO.hasOwnProperty(i))
							{
								this.obPictSliderIndicator.appendChild(
									BX.create('DIV', {
										attrs: {'data-go-to': i},
										props: {className: 'product-item-image-slider-control' + (i == 0 ? ' active' : '')}
									})
								);
								this.obPictSliderIndicator.appendChild(document.createTextNode(' '));
							}
						}

						this.obPictSliderIndicator.style.display = '';
					}

					if (this.obPictSliderProgressBar)
					{
						this.obPictSliderProgressBar.style.display = '';
					}

					// show slider container
					this.obPictSlider.style.display = '';
					this.initializeSlider();
				}
				else
				{
					// hide slider container
					if (this.obPictSlider)
					{
						this.obPictSlider.style.display = 'none';
					}

					if (this.obPictSliderIndicator)
					{
						this.obPictSliderIndicator.style.display = 'none';
					}

					if (this.obPictSliderProgressBar)
					{
						this.obPictSliderProgressBar.style.display = 'none';
					}

					// show pict and pict_second containers
					if (this.obPict)
					{
						if (this.offers[index].PREVIEW_PICTURE)
						{
							BX.adjust(this.obPict, {style: {backgroundImage: 'url(\'' + this.offers[index].PREVIEW_PICTURE.SRC + '\')'}});
						}
						else
						{
							BX.adjust(this.obPict, {style: {backgroundImage: 'url(\'' + this.defaultPict.pict.SRC + '\')'}});
						}

						this.obPict.style.display = '';
					}

					if (this.secondPict && this.obSecondPict)
					{
						if (this.offers[index].PREVIEW_PICTURE_SECOND)
						{
							BX.adjust(this.obSecondPict, {style: {backgroundImage: 'url(\'' + this.offers[index].PREVIEW_PICTURE_SECOND.SRC + '\')'}});
						}
						else if (this.offers[index].PREVIEW_PICTURE.SRC)
						{
							BX.adjust(this.obSecondPict, {style: {backgroundImage: 'url(\'' + this.offers[index].PREVIEW_PICTURE.SRC + '\')'}});
						}
						else if (this.defaultPict.secondPict)
						{
							BX.adjust(this.obSecondPict, {style: {backgroundImage: 'url(\'' + this.defaultPict.secondPict.SRC + '\')'}});
						}
						else
						{
							BX.adjust(this.obSecondPict, {style: {backgroundImage: 'url(\'' + this.defaultPict.pict.SRC + '\')'}});
						}

						this.obSecondPict.style.display = '';
					}
				}

				if (this.showSkuProps && this.obSkuProps)
				{
					if (this.offers[index].DISPLAY_PROPERTIES.length)
					{
						BX.adjust(this.obSkuProps, {style: {display: ''}, html: this.offers[index].DISPLAY_PROPERTIES});
					}
					else
					{
						BX.adjust(this.obSkuProps, {style: {display: 'none'}, html: ''});
					}
				}

				this.quantitySet(index);
				this.setPrice();
				this.setCompared(this.offers[index].COMPARED);

				this.offerNum = index;
			}
		},

		checkPriceRange: function(quantity)
		{
			if (typeof quantity === 'undefined'|| this.currentPriceMode != 'Q')
				return;

			var range, found = false;

			for (var i in this.currentQuantityRanges)
			{
				if (this.currentQuantityRanges.hasOwnProperty(i))
				{
					range = this.currentQuantityRanges[i];

					if (
						parseInt(quantity) >= parseInt(range.SORT_FROM)
						&& (
							range.SORT_TO == 'INF'
							|| parseInt(quantity) <= parseInt(range.SORT_TO)
						)
					)
					{
						found = true;
						this.currentQuantityRangeSelected = range.HASH;
						break;
					}
				}
			}

			if (!found && (range = this.getMinPriceRange()))
			{
				this.currentQuantityRangeSelected = range.HASH;
			}

			for (var k in this.currentPrices)
			{
				if (this.currentPrices.hasOwnProperty(k))
				{
					if (this.currentPrices[k].QUANTITY_HASH == this.currentQuantityRangeSelected)
					{
						this.currentPriceSelected = k;
						break;
					}
				}
			}
		},

		getMinPriceRange: function()
		{
			var range;

			for (var i in this.currentQuantityRanges)
			{
				if (this.currentQuantityRanges.hasOwnProperty(i))
				{
					if (
						!range
						|| parseInt(this.currentQuantityRanges[i].SORT_FROM) < parseInt(range.SORT_FROM)
					)
					{
						range = this.currentQuantityRanges[i];
					}
				}
			}

			return range;
		},

		checkQuantityControls: function()
		{
			if (!this.obQuantity)
				return;

			var reachedTopLimit = this.checkQuantity && parseFloat(this.obQuantity.value) + this.stepQuantity > this.maxQuantity,
				reachedBottomLimit = parseFloat(this.obQuantity.value) - this.stepQuantity < this.minQuantity;

			if (reachedTopLimit)
			{
				BX.addClass(this.obQuantityUp, 'product-item-amount-field-btn-disabled');
			}
			else if (BX.hasClass(this.obQuantityUp, 'product-item-amount-field-btn-disabled'))
			{
				BX.removeClass(this.obQuantityUp, 'product-item-amount-field-btn-disabled');
			}

			if (reachedBottomLimit)
			{
				BX.addClass(this.obQuantityDown, 'product-item-amount-field-btn-disabled');
			}
			else if (BX.hasClass(this.obQuantityDown, 'product-item-amount-field-btn-disabled'))
			{
				BX.removeClass(this.obQuantityDown, 'product-item-amount-field-btn-disabled');
			}

			if (reachedTopLimit && reachedBottomLimit)
			{
				this.obQuantity.setAttribute('disabled', 'disabled');
			}
			else
			{
				this.obQuantity.removeAttribute('disabled');
			}
		},

		setPrice: function()
		{
			var obData, price;

			if (this.obQuantity)
			{
				this.checkPriceRange(this.obQuantity.value);
			}

			this.checkQuantityControls();

			price = this.currentPrices[this.currentPriceSelected];

			if (this.obPrice)
			{
				if (price)
				{
					BX.adjust(this.obPrice, {html: BX.Currency.currencyFormat(price.RATIO_PRICE, price.CURRENCY, true)});
				}
				else
				{
					BX.adjust(this.obPrice, {html: ''});
				}

				if (this.showOldPrice && this.obPriceOld)
				{
					if (price && price.RATIO_PRICE !== price.RATIO_BASE_PRICE)
					{
						BX.adjust(this.obPriceOld, {
							style: {display: ''},
							html: BX.Currency.currencyFormat(price.RATIO_BASE_PRICE, price.CURRENCY, true)
						});
					}
					else
					{
						BX.adjust(this.obPriceOld, {
							style: {display: 'none'},
							html: ''
						});
					}
				}

				if (this.obPriceTotal)
				{
					if (price && this.obQuantity && this.obQuantity.value != this.stepQuantity)
					{
						BX.adjust(this.obPriceTotal, {
							html: BX.message('PRICE_TOTAL_PREFIX') + ' <strong>'
							+ BX.Currency.currencyFormat(price.PRICE * this.obQuantity.value, price.CURRENCY, true)
							+ '</strong>',
							style: {display: ''}
						});
					}
					else
					{
						BX.adjust(this.obPriceTotal, {
							html: '',
							style: {display: 'none'}
						});
					}
				}

				if (this.showPercent)
				{
					if (price && parseInt(price.PERCENT) > 0)
					{
						obData = {style: {display: ''}, html: -price.PERCENT + '%'};
					}
					else
					{
						obData = {style: {display: 'none'}, html: ''};
					}

					if (this.obDscPerc)
					{
						BX.adjust(this.obDscPerc, obData);
					}

					if (this.obSecondDscPerc)
					{
						BX.adjust(this.obSecondDscPerc, obData);
					}
				}
			}
		},

		compare: function(event)
		{
			var checkbox = this.obCompare.querySelector('[data-entity="compare-checkbox"]'),
				target = BX.getEventTarget(event),
				checked = true;

			if (checkbox)
			{
				checked = target === checkbox ? checkbox.checked : !checkbox.checked;
			}

			var url = checked ? this.compareData.compareUrl : this.compareData.compareDeleteUrl,
				compareLink;

			if (url)
			{
				if (target !== checkbox)
				{
					BX.PreventDefault(event);
					this.setCompared(checked);
				}

				switch (this.productType)
				{
					case 0: // no catalog
					case 1: // product
					case 2: // set
					case 7: // service
						compareLink = url.replace('#ID#', this.product.id.toString());
						break;
					case 3: // sku
						compareLink = url.replace('#ID#', this.offers[this.offerNum].ID);
						break;
				}

				BX.ajax({
					method: 'POST',
					dataType: checked ? 'json' : 'html',
					url: compareLink + (compareLink.indexOf('?') !== -1 ? '&' : '?') + 'ajax_action=Y',
					onsuccess: checked
						? BX.proxy(this.compareResult, this)
						: BX.proxy(this.compareDeleteResult, this)
				});
			}
		},

		compareResult: function(result)
		{
			var popupContent, popupButtons;

			if (this.obPopupWin)
			{
				this.obPopupWin.close();
			}

			if (!BX.type.isPlainObject(result))
				return;

			this.initPopupWindow();

			if (this.offers.length > 0)
			{
				this.offers[this.offerNum].COMPARED = result.STATUS === 'OK';
			}

			if (result.STATUS === 'OK')
			{
				BX.onCustomEvent('OnCompareChange');

				popupContent = '<div style="width: 100%; margin: 0; text-align: center;"><p>'
					+ BX.message('COMPARE_MESSAGE_OK')
					+ '</p></div>';

				if (this.showClosePopup)
				{
					popupButtons = [
						new BasketButton({
							text: BX.message('BTN_MESSAGE_COMPARE_REDIRECT'),
							events: {
								click: BX.delegate(this.compareRedirect, this)
							},
							style: {marginRight: '10px'}
						}),
						new BasketButton({
							text: BX.message('BTN_MESSAGE_CLOSE_POPUP'),
							events: {
								click: BX.delegate(this.obPopupWin.close, this.obPopupWin)
							}
						})
					];
				}
				else
				{
					popupButtons = [
						new BasketButton({
							text: BX.message('BTN_MESSAGE_COMPARE_REDIRECT'),
							events: {
								click: BX.delegate(this.compareRedirect, this)
							}
						})
					];
				}
			}
			else
			{
				popupContent = '<div style="width: 100%; margin: 0; text-align: center;"><p>'
					+ (result.MESSAGE ? result.MESSAGE : BX.message('COMPARE_UNKNOWN_ERROR'))
					+ '</p></div>';
				popupButtons = [
					new BasketButton({
						text: BX.message('BTN_MESSAGE_CLOSE'),
						events: {
							click: BX.delegate(this.obPopupWin.close, this.obPopupWin)
						}
					})
				];
			}

			this.obPopupWin.setTitleBar(BX.message('COMPARE_TITLE'));
			this.obPopupWin.setContent(popupContent);
			this.obPopupWin.setButtons(popupButtons);
			this.obPopupWin.show();
		},

		compareDeleteResult: function()
		{
			BX.onCustomEvent('OnCompareChange');

			if (this.offers && this.offers.length)
			{
				this.offers[this.offerNum].COMPARED = false;
			}
		},

		setCompared: function(state)
		{
			if (!this.obCompare)
				return;

			var checkbox = this.obCompare.querySelector('[data-entity="compare-checkbox"]');
			if (checkbox)
			{
				checkbox.checked = state;
			}
		},

		setCompareInfo: function(comparedIds)
		{
			if (!BX.type.isArray(comparedIds))
				return;

			for (var i in this.offers)
			{
				if (this.offers.hasOwnProperty(i))
				{
					this.offers[i].COMPARED = BX.util.in_array(this.offers[i].ID, comparedIds);
				}
			}
		},

		compareRedirect: function()
		{
			if (this.compareData.comparePath)
			{
				location.href = this.compareData.comparePath;
			}
			else
			{
				this.obPopupWin.close();
			}
		},

		checkDeletedCompare: function(id)
		{
			switch (this.productType)
			{
				case 0: // no catalog
				case 1: // product
				case 2: // set
				case 7: // service
					if (this.product.id == id)
					{
						this.setCompared(false);
					}

					break;
				case 3: // sku
					var i = this.offers.length;
					while (i--)
					{
						if (this.offers[i].ID == id)
						{
							this.offers[i].COMPARED = false;

							if (this.offerNum == i)
							{
								this.setCompared(false);
							}

							break;
						}
					}
			}
		},

		initBasketUrl: function()
		{
			this.basketUrl = (this.basketMode === 'ADD' ? this.basketData.add_url : this.basketData.buy_url);
			switch (this.productType)
			{
				case 1: // product
				case 2: // set
				case 7: // service
					this.basketUrl = this.basketUrl.replace('#ID#', this.product.id.toString());
					break;
				case 3: // sku
					this.basketUrl = this.basketUrl.replace('#ID#', this.offers[this.offerNum].ID);
					break;
			}
			this.basketParams = {
				'ajax_basket': 'Y'
			};
			if (this.showQuantity)
			{
				this.basketParams[this.basketData.quantity] = this.obQuantity.value;
			}
			if (this.basketData.sku_props)
			{
				this.basketParams[this.basketData.sku_props_var] = this.basketData.sku_props;
			}
		},

		fillBasketProps: function()
		{
			if (!this.visual.BASKET_PROP_DIV)
			{
				return;
			}
			var
				i = 0,
				propCollection = null,
				foundValues = false,
				obBasketProps = null;

			if (this.basketData.useProps && !this.basketData.emptyProps)
			{
				if (this.obPopupWin && this.obPopupWin.contentContainer)
				{
					obBasketProps = this.obPopupWin.contentContainer;
				}
			}
			else
			{
				obBasketProps = BX(this.visual.BASKET_PROP_DIV);
			}
			if (obBasketProps)
			{
				propCollection = obBasketProps.getElementsByTagName('select');
				if (propCollection && propCollection.length)
				{
					for (i = 0; i < propCollection.length; i++)
					{
						if (!propCollection[i].disabled)
						{
							switch (propCollection[i].type.toLowerCase())
							{
								case 'select-one':
									this.basketParams[propCollection[i].name] = propCollection[i].value;
									foundValues = true;
									break;
								default:
									break;
							}
						}
					}
				}
				propCollection = obBasketProps.getElementsByTagName('input');
				if (propCollection && propCollection.length)
				{
					for (i = 0; i < propCollection.length; i++)
					{
						if (!propCollection[i].disabled)
						{
							switch (propCollection[i].type.toLowerCase())
							{
								case 'hidden':
									this.basketParams[propCollection[i].name] = propCollection[i].value;
									foundValues = true;
									break;
								case 'radio':
									if (propCollection[i].checked)
									{
										this.basketParams[propCollection[i].name] = propCollection[i].value;
										foundValues = true;
									}
									break;
								default:
									break;
							}
						}
					}
				}
			}
			if (!foundValues)
			{
				this.basketParams[this.basketData.props] = [];
				this.basketParams[this.basketData.props][0] = 0;
			}
		},

		add2Basket: function()
		{
			this.basketMode = 'ADD';
			this.basket();
		},

		buyBasket: function()
		{
			this.basketMode = 'BUY';
			this.basket();
		},

		sendToBasket: function()
		{
			if (!this.canBuy)
			{
				return;
			}

			// check recommendation
			if (this.product && this.product.id && this.bigData)
			{
				this.rememberProductRecommendation();
			}

			this.initBasketUrl();
			this.fillBasketProps();
			BX.ajax({
				method: 'POST',
				dataType: 'json',
				url: this.basketUrl,
				data: this.basketParams,
				onsuccess: BX.proxy(this.basketResult, this)
			});
		},

		basket: function()
		{
			var contentBasketProps = '';
			if (!this.canBuy)
			{
				return;
			}
			switch (this.productType)
			{
				case 1: // product
				case 2: // set
				case 7: // service
					if (this.basketData.useProps && !this.basketData.emptyProps)
					{
						this.initPopupWindow();
						this.obPopupWin.setTitleBar(BX.message('TITLE_BASKET_PROPS'));
						if (BX(this.visual.BASKET_PROP_DIV))
						{
							contentBasketProps = BX(this.visual.BASKET_PROP_DIV).innerHTML;
						}
						this.obPopupWin.setContent(contentBasketProps);
						this.obPopupWin.setButtons([
							new BasketButton({
								text: BX.message('BTN_MESSAGE_SEND_PROPS'),
								events: {
									click: BX.delegate(this.sendToBasket, this)
								}
							})
						]);
						this.obPopupWin.show();
					}
					else
					{
						this.sendToBasket();
					}
					break;
				case 3: // sku
					this.sendToBasket();
					break;
			}
		},

		basketResult: function(arResult)
		{
			var strContent = '',
				strPict = '',
				successful,
				buttons = [];

			if (this.obPopupWin)
				this.obPopupWin.close();

			if (!BX.type.isPlainObject(arResult))
				return;

			successful = arResult.STATUS === 'OK';

			if (successful)
			{
				this.setAnalyticsDataLayer('addToCart');
			}

			if (successful && this.basketAction === 'BUY')
			{
				this.basketRedirect();
			}
			else
			{
				this.initPopupWindow();

				if (successful)
				{
					BX.onCustomEvent('OnBasketChange');

					if  (BX.findParent(this.obProduct, {className: 'bx_sale_gift_main_products'}, 10))
					{
						BX.onCustomEvent('onAddToBasketMainProduct', [this]);
					}

					switch (this.productType)
					{
						case 1: // product
						case 2: // set
						case 7: // service
							strPict = this.product.pict.SRC;
							break;
						case 3: // sku
							strPict = (this.offers[this.offerNum].PREVIEW_PICTURE ?
									this.offers[this.offerNum].PREVIEW_PICTURE.SRC :
									this.defaultPict.pict.SRC
							);
							break;
					}

					strContent = '<div style="width: 100%; margin: 0; text-align: center;"><img src="'
						+ strPict + '" height="130" style="max-height:130px"><p>' + this.product.name + '</p></div>';

					if (this.showClosePopup)
					{
						buttons = [
							new BasketButton({
								text: BX.message("BTN_MESSAGE_BASKET_REDIRECT"),
								events: {
									click: BX.delegate(this.basketRedirect, this)
								},
								style: {marginRight: '10px'}
							}),
							new BasketButton({
								text: BX.message("BTN_MESSAGE_CLOSE_POPUP"),
								events: {
									click: BX.delegate(this.obPopupWin.close, this.obPopupWin)
								}
							})
						];
					}
					else
					{
						buttons = [
							new BasketButton({
								text: BX.message("BTN_MESSAGE_BASKET_REDIRECT"),
								events: {
									click: BX.delegate(this.basketRedirect, this)
								}
							})
						];
					}
				}
				else
				{
					strContent = '<div style="width: 100%; margin: 0; text-align: center;"><p>'
						+ (arResult.MESSAGE ? arResult.MESSAGE : BX.message('BASKET_UNKNOWN_ERROR'))
						+ '</p></div>';
					buttons = [
						new BasketButton({
							text: BX.message('BTN_MESSAGE_CLOSE'),
							events: {
								click: BX.delegate(this.obPopupWin.close, this.obPopupWin)
							}
						})
					];
				}
				this.obPopupWin.setTitleBar(successful ? BX.message('TITLE_SUCCESSFUL') : BX.message('TITLE_ERROR'));
				this.obPopupWin.setContent(strContent);
				this.obPopupWin.setButtons(buttons);
				this.obPopupWin.show();
			}
		},

		basketRedirect: function()
		{
			location.href = (this.basketData.basketUrl ? this.basketData.basketUrl : BX.message('BASKET_URL'));
		},

		initPopupWindow: function()
		{
			if (this.obPopupWin)
				return;

			this.obPopupWin = BX.PopupWindowManager.create('CatalogSectionBasket_' + this.visual.ID, null, {
				autoHide: true,
				offsetLeft: 0,
				offsetTop: 0,
				overlay : true,
				closeByEsc: true,
				titleBar: true,
				closeIcon: true,
				contentColor: 'white',
				className: this.templateTheme ? 'bx-' + this.templateTheme : ''
			});
		}
	};
})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:100:"/bitrix/components/bitrix/sale.basket.basket/templates/.default/js/action-pool.min.js?17472039794358";s:6:"source";s:81:"/bitrix/components/bitrix/sale.basket.basket/templates/.default/js/action-pool.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(){"use strict";BX.namespace("BX.Sale.BasketActionPool");BX.Sale.BasketActionPool=function(t){this.component=t;this.requestProcessing=false;this.updateTimer=null;this.isBasketRefreshed=this.component.params.DEFERRED_REFRESH!=="Y";this.needFullRecalculation=this.component.params.DEFERRED_REFRESH==="Y";this.pool={};this.lastActualPool={};this.approvedAction=["QUANTITY","DELETE","RESTORE","DELAY","OFFER","MERGE_OFFER"];this.switchTimer()};BX.Sale.BasketActionPool.prototype.setRefreshStatus=function(t){this.isBasketRefreshed=!!t};BX.Sale.BasketActionPool.prototype.getRefreshStatus=function(){return this.isBasketRefreshed};BX.Sale.BasketActionPool.prototype.isItemInPool=function(t){return!!this.pool[t]};BX.Sale.BasketActionPool.prototype.clearLastActualQuantityPool=function(t){this.lastActualPool[t]&&delete this.lastActualPool[t].QUANTITY};BX.Sale.BasketActionPool.prototype.checkItemPoolBefore=function(t){if(!t)return;this.pool[t]=this.pool[t]||{}};BX.Sale.BasketActionPool.prototype.checkItemPoolAfter=function(t){if(!t||!this.pool[t])return;if(Object.keys(this.pool[t]).length===0){delete this.pool[t]}};BX.Sale.BasketActionPool.prototype.addCoupon=function(t){this.pool.COUPON=t;this.switchTimer()};BX.Sale.BasketActionPool.prototype.removeCoupon=function(t){this.checkItemPoolBefore("REMOVE_COUPON");this.pool.REMOVE_COUPON[t]=t;this.switchTimer()};BX.Sale.BasketActionPool.prototype.changeQuantity=function(t,o,e){this.checkItemPoolBefore(t);if(this.lastActualPool[t]&&this.lastActualPool[t].QUANTITY!==o||!this.lastActualPool[t]&&o!==e){this.pool[t].QUANTITY=o}else{this.pool[t]&&delete this.pool[t].QUANTITY}this.checkItemPoolAfter(t);this.switchTimer()};BX.Sale.BasketActionPool.prototype.deleteItem=function(t){this.checkItemPoolBefore(t);if(this.pool[t].RESTORE){delete this.pool[t].RESTORE}else{this.pool[t].DELETE="Y"}this.checkItemPoolAfter(t);this.switchTimer()};BX.Sale.BasketActionPool.prototype.restoreItem=function(t,o){this.checkItemPoolBefore(t);if(this.pool[t].DELETE==="Y"){delete this.pool[t].DELETE}else{this.pool[t].RESTORE=o}this.checkItemPoolAfter(t);this.switchTimer()};BX.Sale.BasketActionPool.prototype.addDelayed=function(t){this.checkItemPoolBefore(t);this.pool[t].DELAY="Y";this.checkItemPoolAfter(t);this.switchTimer()};BX.Sale.BasketActionPool.prototype.removeDelayed=function(t){this.checkItemPoolBefore(t);this.pool[t].DELAY="N";this.checkItemPoolAfter(t);this.switchTimer()};BX.Sale.BasketActionPool.prototype.changeSku=function(t,o,e){if(JSON.stringify(o)!==JSON.stringify(e)){this.checkItemPoolBefore(t);this.pool[t].OFFER=o}else{this.pool[t]&&delete this.pool[t].OFFER;this.checkItemPoolAfter(t)}this.switchTimer()};BX.Sale.BasketActionPool.prototype.mergeSku=function(t){this.checkItemPoolBefore(t);this.pool[t].MERGE_OFFER="Y";this.switchTimer()};BX.Sale.BasketActionPool.prototype.switchTimer=function(){clearTimeout(this.updateTimer);if(this.isProcessing()){return}if(this.isPoolEmpty()){this.component.editPostponedBasketItems();this.component.fireCustomEvents()}if(!this.isPoolEmpty()){this.updateTimer=setTimeout(BX.proxy(this.trySendPool,this),300)}else if(!this.getRefreshStatus()){this.trySendPool()}};BX.Sale.BasketActionPool.prototype.trySendPool=function(){if(this.isPoolEmpty()&&this.getRefreshStatus()){return}this.doProcessing(true);if(!this.isPoolEmpty()){this.component.sendRequest("recalculateAjax",{basket:this.getPoolData()});this.lastActualPool=this.pool;this.pool={}}else if(!this.getRefreshStatus()){this.component.sendRequest("refreshAjax",{fullRecalculation:this.needFullRecalculation?"Y":"N"});this.needFullRecalculation=false}};BX.Sale.BasketActionPool.prototype.getPoolData=function(){var t={},o=this.pool;if(o.COUPON){t.coupon=o.COUPON;delete o.COUPON}if(o.REMOVE_COUPON){t.delete_coupon=o.REMOVE_COUPON;delete o.REMOVE_COUPON}for(var e in o){if(o.hasOwnProperty(e)){for(var i in o[e]){if(o[e].hasOwnProperty(i)&&BX.util.in_array(i,this.approvedAction)){t[i+"_"+e]=o[e][i]}}}}return t};BX.Sale.BasketActionPool.prototype.isPoolEmpty=function(){return Object.keys(this.pool).length===0};BX.Sale.BasketActionPool.prototype.doProcessing=function(t){this.requestProcessing=t===true;if(this.requestProcessing){this.component.startLoader()}else{this.component.endLoader()}};BX.Sale.BasketActionPool.prototype.isProcessing=function(){return this.requestProcessing===true}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:96:"/bitrix/components/bitrix/sale.basket.basket/templates/.default/js/filter.min.js?174720397910511";s:6:"source";s:76:"/bitrix/components/bitrix/sale.basket.basket/templates/.default/js/filter.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(){"use strict";BX.namespace("BX.Sale.BasketFilter");BX.Sale.BasketFilter=function(t){this.component=t;this.activeFilterMode=false;this.filterTimer=null;this.mouseOverClearFilter=false;this.realShownItems=[];this.realSortedItems=[];this.realScrollTop=0;this.lastShownItemsHash="";this.currentFilter={query:"",similarHash:"",warning:false,notAvailable:false,delayed:false};if(this.component.useItemsFilter){this.bindEvents()}};BX.Sale.BasketFilter.prototype.bindEvents=function(){var t;var e=this.component.getEntity(this.component.getCacheNode(this.component.ids.itemListWrapper),"basket-filter");t=this.component.getEntity(e,"basket-filter-input");if(BX.type.isDomNode(t)){BX.bind(t,"focus",function(){e.style.flex=3});BX.bind(t,"blur",BX.delegate(function(){if(!this.mouseOverClearFilter){e.style.flex=""}},this));BX.bind(t,"keyup",BX.proxy(this.onFilterInput,this));BX.bind(t,"cut",BX.proxy(this.onFilterInput,this));BX.bind(t,"paste",BX.proxy(this.onFilterInput,this))}t=this.component.getEntity(e,"basket-filter-clear-btn");if(BX.type.isDomNode(t)){BX.bind(t,"mouseenter",BX.delegate(function(){this.mouseOverClearFilter=true},this));BX.bind(t,"mouseout",BX.delegate(function(){this.mouseOverClearFilter=false},this));BX.bind(t,"click",BX.delegate(function(){if(!this.filterInputEmpty()){this.clearFilterInput();this.onFilterChange()}e.style.flex=""},this))}};BX.Sale.BasketFilter.prototype.isActive=function(){return this.activeFilterMode};BX.Sale.BasketFilter.prototype.showFilterByName=function(t){if(!t)return;switch(t){case"not-available":this.showNotAvailableItemsFilter();break;case"delayed":this.showDelayItemsFilter();break;case"warning":this.showWarningItemsFilter();break;case"similar":this.showSimilarItemsFilter();break;case"all":default:this.clearAllFiltersExcept([]);this.onFilterChange()}};BX.Sale.BasketFilter.prototype.onFilterInput=function(){var t=BX.type.isDomNode(BX.proxy_context)?BX.util.trim(BX.proxy_context.value).toLowerCase():"";if(this.currentFilter.query!==t){this.currentFilter.query=t;this.onFilterChange()}};BX.Sale.BasketFilter.prototype.clearAllFiltersExcept=function(t){if(!t||!BX.type.isArray(t))return;!BX.util.in_array("input",t)&&this.clearFilterInput();!BX.util.in_array("warning",t)&&this.clearWarningItemsFilter();!BX.util.in_array("delayed",t)&&this.clearDelayItemsFilter();!BX.util.in_array("not-available",t)&&this.clearNotAvailableItemsFilter();if(!BX.util.in_array("similar",t)){this.clearSimilarItemsFilter();this.component.showSimilarCount(false)}};BX.Sale.BasketFilter.prototype.filterInputEmpty=function(){return this.currentFilter.query.length===0};BX.Sale.BasketFilter.prototype.clearFilterInput=function(){this.currentFilter.query="";var t=this.component.getEntity(this.component.getCacheNode(this.component.ids.itemListWrapper),"basket-filter-input");if(BX.type.isDomNode(t)){t.value=""}};BX.Sale.BasketFilter.prototype.addWarningItemsFilter=function(){this.currentFilter.warning=true};BX.Sale.BasketFilter.prototype.clearWarningItemsFilter=function(){this.currentFilter.warning=false};BX.Sale.BasketFilter.prototype.showWarningItemsFilter=function(){if(!this.currentFilter.warning){this.clearAllFiltersExcept(["warning"]);this.addWarningItemsFilter();this.onFilterChange()}};BX.Sale.BasketFilter.prototype.addDelayItemsFilter=function(){this.currentFilter.delayed=true};BX.Sale.BasketFilter.prototype.clearDelayItemsFilter=function(){this.currentFilter.delayed=false};BX.Sale.BasketFilter.prototype.showDelayItemsFilter=function(){if(!this.currentFilter.delayed){this.clearAllFiltersExcept(["delayed"]);this.addDelayItemsFilter();this.onFilterChange()}};BX.Sale.BasketFilter.prototype.addNotAvailableItemsFilter=function(){this.currentFilter.notAvailable=true};BX.Sale.BasketFilter.prototype.clearNotAvailableItemsFilter=function(){this.currentFilter.notAvailable=false};BX.Sale.BasketFilter.prototype.showNotAvailableItemsFilter=function(){if(!this.currentFilter.notAvailable){this.clearAllFiltersExcept(["not-available"]);this.addNotAvailableItemsFilter();this.onFilterChange()}};BX.Sale.BasketFilter.prototype.addSimilarItemsFilter=function(t){this.currentFilter.similarHash=t.HASH};BX.Sale.BasketFilter.prototype.clearSimilarItemsFilter=function(){this.currentFilter.similarHash=""};BX.Sale.BasketFilter.prototype.showSimilarItemsFilter=function(){var t=this.component.getItemDataByTarget(BX.proxy_context);if(this.currentFilter.similarHash!==t.HASH){this.clearAllFiltersExcept(["similar"]);this.addSimilarItemsFilter(t);this.onFilterChange()}};BX.Sale.BasketFilter.prototype.getTimeoutDuration=function(){return this.component.duration.filterTimer};BX.Sale.BasketFilter.prototype.onFilterChange=function(){this.component.showItemsOverlay();if(this.currentFilter.query.length||this.currentFilter.similarHash.length||this.currentFilter.warning||this.currentFilter.notAvailable||this.currentFilter.delayed){clearTimeout(this.filterTimer);this.filterTimer=setTimeout(BX.proxy(this.enableFilterMode,this),this.getTimeoutDuration())}else{this.disableFilterMode()}};BX.Sale.BasketFilter.prototype.enableFilterMode=function(){var t;if(!this.activeFilterMode){this.activeFilterMode=true;this.realShownItems=BX.util.array_values(this.component.shownItems);this.realSortedItems=BX.util.array_values(this.component.sortedItems);this.realScrollTop=this.component.getDocumentScrollTop()}this.component.scrollToFirstItem();this.component.sortedItems=this.searchItems();t=JSON.stringify(this.component.sortedItems);if(this.lastShownItemsHash!==t){this.lastShownItemsHash=t;this.component.deleteBasketItems(BX.util.array_values(this.component.shownItems),false);if(this.component.sortedItems.length){this.component.initializeBasketItems();this.hideEmptyFilterResult()}else{this.showEmptyFilterResult()}if(this.currentFilter.similarHash.length){this.component.showSimilarCount(true)}}else{this.highlightFoundItems()}this.component.hideItemsOverlay()};BX.Sale.BasketFilter.prototype.disableFilterMode=function(){clearTimeout(this.filterTimer);this.lastShownItemsHash="";if(this.activeFilterMode){this.activeFilterMode=false;this.component.sortedItems=BX.util.array_values(this.realSortedItems);this.component.deleteBasketItems(BX.util.array_values(this.component.shownItems),false);this.hideEmptyFilterResult();this.component.editBasketItems(BX.util.array_values(this.realShownItems));window.scrollTo(0,this.realScrollTop)}this.component.hideItemsOverlay()};BX.Sale.BasketFilter.prototype.searchItems=function(){var t=[];for(var e=0;e<this.realSortedItems.length;e++){var i=this.component.items[this.realSortedItems[e]];if(i&&this.searchItemMatch(i)){t.push(i.ID)}}return t};BX.Sale.BasketFilter.prototype.highlightFoundItems=function(){if(!this.activeFilterMode)return;for(var t in this.component.shownItems){if(this.component.shownItems.hasOwnProperty(t)){this.highlightSearchMatch(this.component.items[this.component.shownItems[t]])}}};BX.Sale.BasketFilter.prototype.searchItemMatch=function(t){var e=false,i=false;if(this.currentFilter.notAvailable){i=!!t.NOT_AVAILABLE;if(!i){return e}}else if(this.currentFilter.delayed){i=!!t.DELAYED;if(!i){return e}}else if(this.currentFilter.warning){i=BX.util.in_array(t.ID,this.component.warningItems);if(!i){return e}}else if(BX.type.isNotEmptyString(this.currentFilter.similarHash)){i=this.currentFilter.similarHash===t.HASH;if(!i){return e}}if(BX.type.isNotEmptyString(this.currentFilter.query)){if(t.NAME.toLowerCase().indexOf(this.currentFilter.query)!==-1){e="NAME"}if(!e){var r=parseFloat(this.currentFilter.query);if(!isNaN(r)){if(parseFloat(t.PRICE)===r){e="PRICE"}else if(parseFloat(t.SUM_PRICE)===r){e="SUM_PRICE"}}}if(!e&&this.currentFilter.query.length>=3){if(t.PRICE_FORMATED.toLowerCase().indexOf(this.currentFilter.query)!==-1){e="PRICE"}else if(t.SUM_PRICE_FORMATED.toLowerCase().indexOf(this.currentFilter.query)!==-1){e="SUM_PRICE"}}var s,l;if(!e&&t.PROPS.length){for(s in t.PROPS){if(t.PROPS.hasOwnProperty(s)&&BX.type.isNotEmptyString(t.PROPS[s].VALUE)){l=t.PROPS[s].VALUE.toLowerCase();if(l===this.currentFilter.query||this.currentFilter.query.length>=3&&l.indexOf(this.currentFilter.query)!==-1){e="PROPS";break}}}}if(!e&&t.COLUMN_LIST.length){for(s in t.COLUMN_LIST){if(t.COLUMN_LIST.hasOwnProperty(s)&&BX.type.isNotEmptyString(t.COLUMN_LIST[s].VALUE)){l=t.COLUMN_LIST[s].VALUE.toLowerCase();if(l===this.currentFilter.query||this.currentFilter.query.length>=3&&l.indexOf(this.currentFilter.query)!==-1){e="COLUMNS";break}}}}}else if(i){e=true}return e};BX.Sale.BasketFilter.prototype.highlightSearchMatch=function(t){var e=this.searchItemMatch(t);if(e){var i,r,s,l;switch(e){case"NAME":i=this.component.getEntity(BX(this.component.ids.item+t.ID),"basket-item-name");if(BX.type.isDomNode(i)){i.innerHTML=t.NAME.replace(new RegExp("(.*)("+this.currentFilter.query.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")(.*)","gi"),function(t,e,i,r){return BX.util.htmlspecialchars(e)+'<span class="basket-item-highlighted">'+BX.util.htmlspecialchars(i)+"</span>"+BX.util.htmlspecialchars(r)})}break;case"PRICE":i=BX(this.component.ids.price+t.ID);BX.addClass(i,"basket-item-highlighted");break;case"SUM_PRICE":i=BX(this.component.ids.sumPrice+t.ID);BX.addClass(i,"basket-item-highlighted");break;case"PROPS":i=this.component.getEntities(BX(this.component.ids.item+t.ID),"basket-item-property-value");for(r=0;r<i.length;r++){l=i[r].getAttribute("data-property-code");for(s in t.PROPS){if(t.PROPS.hasOwnProperty(s)&&t.PROPS[s].CODE===l){i[r].innerHTML=t.PROPS[s].VALUE.replace(new RegExp("("+this.currentFilter.query+")","gi"),'<span class="basket-item-highlighted">$1</span>')}}}break;case"COLUMNS":i=this.component.getEntities(BX(this.component.ids.item+t.ID),"basket-item-property-column-value");for(r=0;r<i.length;r++){l=i[r].getAttribute("data-column-property-code");for(s in t.COLUMN_LIST){if(t.COLUMN_LIST.hasOwnProperty(s)&&t.COLUMN_LIST[s].CODE===l){i[r].innerHTML=t.COLUMN_LIST[s].VALUE.replace(new RegExp("("+this.currentFilter.query+")","gi"),'<span class="basket-item-highlighted">$1</span>')}}}break}}};BX.Sale.BasketFilter.prototype.showEmptyFilterResult=function(){var t=this.component.getCacheNode(this.component.ids.itemList);if(BX.type.isDomNode(t)&&t.clientHeight>=500){var e=this.component.getCacheNode(this.component.ids.itemListEmptyResult);if(BX.type.isDomNode(e)){e.style.display=""}}};BX.Sale.BasketFilter.prototype.hideEmptyFilterResult=function(){var t=this.component.getCacheNode(this.component.ids.itemListEmptyResult);if(BX.type.isDomNode(t)){t.style.display="none"}}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/components/bitrix/sale.basket.basket/templates/.default/js/component.min.js?174720397937537";s:6:"source";s:79:"/bitrix/components/bitrix/sale.basket.basket/templates/.default/js/component.js";s:3:"min";s:83:"/bitrix/components/bitrix/sale.basket.basket/templates/.default/js/component.min.js";s:3:"map";s:83:"/bitrix/components/bitrix/sale.basket.basket/templates/.default/js/component.map.js";}"*/
(function(){"use strict";BX.namespace("BX.Sale.BasketComponent");BX.Sale.BasketComponent={maxItemsShowCount:30,precisionFactor:Math.pow(10,6),stickyHeaderOffset:0,duration:{priceAnimation:300,filterTimer:300},ids:{item:"basket-item-",quantity:"basket-item-quantity-",price:"basket-item-price-",sumPrice:"basket-item-sum-price-",sumPriceOld:"basket-item-sum-price-old-",sumPriceDiff:"basket-item-sum-price-difference-",itemHeightAligner:"basket-item-height-aligner-",total:"basket-total-price",basketRoot:"basket-root",itemListWrapper:"basket-items-list-wrapper",itemListContainer:"basket-items-list-container",itemList:"basket-item-list",itemListTable:"basket-item-table",itemListEmptyResult:"basket-item-list-empty-result",itemListOverlay:"basket-items-list-overlay",warning:"basket-warning"},initializePrimaryFields:function(){this.templates={};this.nodes={};this.items={};this.sortedItems=[];this.shownItems=[];this.changedItems=[];this.postponedItems=[];this.warningItems=[];this.isMobile=BX.browser.IsMobile();this.isTouch=BX.hasClass(document.documentElement,"bx-touch");this.lastAction="initialLoad";this.coupons=null;this.imagePopup=null;this.loadingScreen=null;this.quantityDelay=null;this.quantityTimer=null},init:function(t){this.initializePrimaryFields();this.params=t.params||{};this.template=t.template||"";this.signedParamsString=t.signedParamsString||"";this.siteId=t.siteId||"";this.siteTemplateId=t.siteTemplateId||"";this.ajaxUrl=this.params.AJAX_PATH||"";this.templateFolder=t.templateFolder||"";this.useDynamicScroll=this.params.USE_DYNAMIC_SCROLL==="Y";this.useItemsFilter=this.params.SHOW_FILTER==="Y"&&!this.isMobile;this.initializeFilter();this.applyBasketResult(t.result);this.initializeActionPool();if(this.useItemsFilter){this.checkHeaderDisplay();this.bindHeaderEvents()}this.initializeBasketItems();this.editTotal();this.editWarnings();this.getCacheNode(this.ids.basketRoot).style.opacity=1;this.bindInitialEvents()},getTemplate:function(t){if(!this.templates.hasOwnProperty(t)){var i=BX(t);this.templates[t]=BX.type.isDomNode(i)?i.innerHTML:""}return this.templates[t]},getCacheNode:function(t){if(!this.nodes.hasOwnProperty(t)){this.nodes[t]=BX(t)}return this.nodes[t]},getEntity:function(t,i,e){if(!t||!i)return null;e=e||"";return t.querySelector(e+'[data-entity="'+i+'"]')},getEntities:function(t,i,e){if(!t||!i)return{length:0};e=e||"";return t.querySelectorAll(e+'[data-entity="'+i+'"]')},bindInitialEvents:function(){this.bindWarningEvents();BX.bind(window,"scroll",BX.proxy(this.checkStickyHeaders,this));BX.bind(window,"scroll",BX.proxy(this.lazyLoad,this));BX.bind(window,"resize",BX.throttle(this.checkStickyHeaders,20,this))},bindWarningEvents:function(){var t=this.getEntity(BX(this.ids.warning),"basket-items-warning-count");if(BX.type.isDomNode(t)){t.style.display="";BX.bind(t,"click",BX.delegate(function(){this.toggleFilter("warning")},this))}BX.bind(this.getEntity(BX(this.ids.warning),"basket-items-warning-notification-close"),"click",BX.proxy(this.removeAllWarnings,this))},toggleFilter:function(t){var i=BX.type.isNotEmptyString(t)?this.getEntity(this.getCacheNode(this.ids.itemListWrapper),"basket-items-count",'[data-filter="'+t+'"]'):BX.getEventTarget(t);if(!BX.type.isDomNode(i)||BX.hasClass(i,"active"))return;var e=i.getAttribute("data-filter");var s=i.parentNode.querySelectorAll("[data-filter]");for(var a=0;a<s.length;a++){if(s[a].getAttribute("data-filter")===e){BX.addClass(s[a],"active")}else if(BX.hasClass(s[a],"active")){BX.removeClass(s[a],"active")}}this.filter.showFilterByName(e)},scrollToFirstItem:function(){var t=this.getEntity(this.getCacheNode(this.ids.itemListWrapper),"basket-items-list-header");if(BX.type.isDomNode(t)){var i=BX.pos(this.getCacheNode(this.ids.itemListContainer)).top;var e=BX.pos(t).bottom;if(i<e){window.scrollTo(0,i-this.stickyHeaderOffset)}}},showItemsOverlay:function(){var t=this.getCacheNode(this.ids.itemListOverlay);if(BX.type.isDomNode(t)){t.style.display=""}},hideItemsOverlay:function(){var t=this.getCacheNode(this.ids.itemListOverlay);if(BX.type.isDomNode(t)){t.style.display="none"}},checkHeaderDisplay:function(){var t=this.getCacheNode(this.ids.itemListWrapper);if(BX.type.isDomNode(t)){BX.removeClass(t,"basket-items-list-wrapper-light")}},bindHeaderEvents:function(){var t=this.getEntities(this.getCacheNode(this.ids.itemListWrapper),"basket-items-count");for(var i=0;i<t.length;i++){BX.bind(t[i],"click",BX.proxy(this.toggleFilter,this))}},checkStickyHeaders:function(){if(this.isMobile)return;var t,i;var e=2,s=0;var a=this.getDocumentScrollTop();var n=BX.pos(this.getCacheNode(this.ids.basketRoot));var r=a+200>=n.bottom;if(BX.util.in_array("top",this.params.TOTAL_BLOCK_DISPLAY)){var o=this.getEntity(this.getCacheNode(this.ids.basketRoot),"basket-total-block");if(BX.type.isDomNode(o)){t=this.getEntity(o,"basket-checkout-aligner");if(BX.type.isDomNode(t)){i=BX.pos(o);if(a>=i.top){s+=t.clientHeight;if(!BX.hasClass(t,"basket-checkout-container-fixed")){o.style.height=i.height+"px";t.style.width=t.clientWidth+e+"px";BX.addClass(t,"basket-checkout-container-fixed")}}else if(BX.hasClass(t,"basket-checkout-container-fixed")){o.style.height="";t.style.width="";BX.removeClass(t,"basket-checkout-container-fixed")}if(r){if(!BX.hasClass(t,"basket-checkout-container-fixed-hide")){BX.addClass(t,"basket-checkout-container-fixed-hide")}}else if(BX.hasClass(t,"basket-checkout-container-fixed-hide")){BX.removeClass(t,"basket-checkout-container-fixed-hide")}}}}if(this.useItemsFilter){var h=this.getCacheNode(this.ids.itemListWrapper);t=this.getEntity(h,"basket-items-list-header");if(BX.type.isDomNode(t)){i=BX.pos(h);if(a+s>=i.top&&!r){if(!BX.hasClass(t,"basket-items-list-header-fixed")){t.style.width=t.clientWidth+e+"px";h.style.paddingTop=t.clientHeight+"px";BX.addClass(t,"basket-items-list-header-fixed")}if(s){t.style.top=s+"px"}s+=t.clientHeight}else if(BX.hasClass(t,"basket-items-list-header-fixed")){h.style.paddingTop="";t.style.width="";t.style.top="";BX.removeClass(t,"basket-items-list-header-fixed")}}}this.stickyHeaderOffset=s},getDocumentScrollTop:function(){return window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0)},lazyLoad:function(){var t=BX.pos(this.getCacheNode(this.ids.itemListContainer));if(this.getDocumentScrollTop()+window.innerHeight>=t.bottom-400){var i=this.getItemsAfter();if(i.length){this.editBasketItems(i)}}},fireCustomEvents:function(){if(this.result.EVENT_ONCHANGE_ON_START==="Y"){BX.onCustomEvent("OnBasketChange")}if(this.params.HIDE_COUPON!=="Y"){if(this.coupons!==null&&this.coupons!==this.result.COUPON_LIST){BX.onCustomEvent("OnCouponApply")}this.coupons=this.result.COUPON_LIST}},editTotal:function(){this.fillTotalBlocks();this.showItemsCount();this.showWarningItemsCount();this.showNotAvailableItemsCount();this.showDelayedItemsCount()},fillTotalBlocks:function(){var t=this.getEntities(this.getCacheNode(this.ids.basketRoot),"basket-total-block");if(t&&t.length){var i=this.getTemplate("basket-total-template");if(i){var e=this.render(i,this.result.TOTAL_RENDER_DATA);for(var s in t){if(t.hasOwnProperty(s)&&BX.type.isDomNode(t[s])){t[s].innerHTML=e;this.bindTotalEvents(t[s])}}}}this.checkStickyHeaders()},showItemsCount:function(){var t=this.getEntity(this.getCacheNode(this.ids.itemListWrapper),"basket-items-count",'[data-filter="all"]');if(BX.type.isDomNode(t)){t.innerHTML=BX.message("SBB_IN_BASKET")+" "+this.result.BASKET_ITEMS_COUNT+" "+this.getGoodsMessage(this.result.BASKET_ITEMS_COUNT);t.style.display=""}},showSimilarCount:function(t){var i=this.getEntity(this.getCacheNode(this.ids.itemListWrapper),"basket-items-count",'[data-filter="similar"]');if(BX.type.isDomNode(i)){if(t){i.innerHTML=this.sortedItems.length+" "+this.getGoodsMessage(this.result.BASKET_ITEMS_COUNT,"SBB_SIMILAR_ITEM");i.style.display=""}else{i.style.display="none"}}},showWarningItemsCount:function(){var t=this.getEntity(this.getCacheNode(this.ids.itemListWrapper),"basket-items-count",'[data-filter="warning"]');if(BX.type.isDomNode(t)){if(this.warningItems.length){t.innerHTML=this.warningItems.length+" "+BX.message("SBB_BASKET_ITEMS_WARNING");t.style.display=""}else{t.style.display="none"}}},showNotAvailableItemsCount:function(){var t=this.getEntity(this.getCacheNode(this.ids.itemListWrapper),"basket-items-count",'[data-filter="not-available"]');if(BX.type.isDomNode(t)){if(parseInt(this.result.NOT_AVAILABLE_BASKET_ITEMS_COUNT)){t.innerHTML=this.result.NOT_AVAILABLE_BASKET_ITEMS_COUNT+" "+this.getGoodsMessage(this.result.NOT_AVAILABLE_BASKET_ITEMS_COUNT,"SBB_NOT_AVAILABLE_ITEM");t.style.display=""}else{t.style.display="none"}}},showDelayedItemsCount:function(){var t=this.getEntity(this.getCacheNode(this.ids.itemListWrapper),"basket-items-count",'[data-filter="delayed"]');if(BX.type.isDomNode(t)){if(parseInt(this.result.DELAYED_BASKET_ITEMS_COUNT)){t.innerHTML=this.result.DELAYED_BASKET_ITEMS_COUNT+" "+this.getGoodsMessage(this.result.DELAYED_BASKET_ITEMS_COUNT,"SBB_DELAYED_ITEM");t.style.display=""}else{t.style.display="none"}}},getGoodsMessage:function(t,i){var e;var s=t>10&&t<20?0:t%10;if(s===1){e=i||"SBB_GOOD"}else if(s>=2&&s<=4){e=i?i+"_2":"SBB_GOOD_2"}else{e=i?i+"S":"SBB_GOODS"}return BX.message(e)},bindTotalEvents:function(t){if(!this.result.TOTAL_RENDER_DATA.DISABLE_CHECKOUT){BX.bind(this.getEntity(t,"basket-checkout-button"),"click",BX.proxy(this.checkOutAction,this))}BX.bind(this.getEntity(t,"basket-coupon-input"),"change",BX.proxy(this.addCouponAction,this));BX.bind(this.getEntity(t,"basket-coupon-input"),"paste",BX.proxy(this.pasteCouponAction,this));var i=this.getEntities(t,"basket-coupon-delete");for(var e=0,s=i.length;e<s;e++){BX.bind(i[e],"click",BX.proxy(this.removeCouponAction,this))}},checkOutAction:function(){document.location.href=this.params.PATH_TO_ORDER},addCouponAction:function(t){var i=BX.getEventTarget(t);if(i&&i.value){this.actionPool.addCoupon(i.value);i.disabled=true}},pasteCouponAction:function(t){setTimeout(BX.delegate(function(){this.addCouponAction(t)},this),10)},removeCouponAction:function(){var t=BX.proxy_context&&BX.util.trim(BX.proxy_context.getAttribute("data-coupon"));if(t){this.actionPool.removeCoupon(t)}},initializeActionPool:function(){this.actionPool=new BX.Sale.BasketActionPool(this)},initializeFilter:function(){this.filter=new BX.Sale.BasketFilter(this)},sendRequest:function(t,i){this.lastAction=t;if(this.lastAction==="recalculateAjax"){i.lastAppliedDiscounts=BX.util.array_keys(this.result.FULL_DISCOUNT_LIST).join(",");if(this.params.USE_ENHANCED_ECOMMERCE==="Y"){this.checkAnalytics(i)}}BX.ajax({method:"POST",dataType:"json",url:this.ajaxUrl,data:this.getData(i),onsuccess:BX.delegate(function(t){this.actionPool.doProcessing(false);if(!BX.type.isPlainObject(t))return;this.actionPool.setRefreshStatus(t.BASKET_REFRESHED);if(t.RESTORED_BASKET_ITEMS){this.restoreBasketItems(t.RESTORED_BASKET_ITEMS)}if(t.DELETED_BASKET_ITEMS){this.deleteBasketItems(t.DELETED_BASKET_ITEMS,this.params.SHOW_RESTORE==="Y")}if(t.MERGED_BASKET_ITEMS){this.deleteBasketItems(t.MERGED_BASKET_ITEMS,false,true)}this.applyBasketResult(t.BASKET_DATA);this.editBasketItems(this.getItemsToEdit());this.editTotal();this.applyPriceAnimation();this.editWarnings();this.actionPool.switchTimer();if(this.isBasketIntegrated()&&this.isBasketChanged()){BX.Sale.OrderAjaxComponent.sendRequest()}},this),onfailure:BX.delegate(function(){this.actionPool.doProcessing(false)},this)})},isBasketIntegrated:function(){return this.params.BASKET_WITH_ORDER_INTEGRATION==="Y"},isBasketChanged:function(){return this.changedItems.length},addPriceAnimationData:function(t,i,e,s){if(!BX.type.isPlainObject(this.priceAnimationData)){this.clearPriceAnimationData()}this.priceAnimationData.start[t]=parseFloat(i);this.priceAnimationData.finish[t]=parseFloat(e);this.priceAnimationData.currency[t]=s;this.priceAnimationData.int[t]=parseFloat(i)===parseInt(i)&&parseFloat(e)===parseInt(e)},clearPriceAnimationData:function(){this.priceAnimationData={start:{},finish:{},currency:{},int:{}}},applyBasketResult:function(t){this.changedItems=[];this.clearPriceAnimationData();if(!BX.type.isPlainObject(t)){return}if(t.BASKET_ITEM_RENDER_DATA){var i,e;for(i in t.BASKET_ITEM_RENDER_DATA){if(t.BASKET_ITEM_RENDER_DATA.hasOwnProperty(i)){e=t.BASKET_ITEM_RENDER_DATA[i];e.WARNINGS=this.checkBasketItemWarnings(e,t.WARNING_MESSAGE_WITH_CODE);if(this.items[e.ID]){if(JSON.stringify(this.items[e.ID])===JSON.stringify(e)){continue}}else{this.addSortedItem(e.ID,true)}this.changedItems.push(e.ID);e=this.checkBasketItemsAnimation(e);this.items[e.ID]=e}}this.changedItems=BX.util.array_unique(this.changedItems.concat(this.getChangedSimilarOffers()));if(this.isBasketChanged()){this.sortSortedItems(true)}}if(t.TOTAL_RENDER_DATA){t.TOTAL_RENDER_DATA=this.checkTotalAnimation(t.TOTAL_RENDER_DATA)}this.result=t},itemSortFunction:function(t,i){if(!this.items.hasOwnProperty(t)||!this.items.hasOwnProperty(i)){return 0}return parseFloat(this.items[t].SORT)-parseFloat(this.items[i].SORT)},getChangedSimilarOffers:function(){var t=[];var i,e;var s=this.getHashMap();for(var a in s){if(s.hasOwnProperty(a)){if(s[a].length>1){for(var n=0;n<s[a].length;n++){i=0;e=0;for(var r=0;r<s[a].length;r++){if(s[a][r]!=s[a][n]){i+=parseFloat(this.items[s[a][r]].QUANTITY)}e+=parseFloat(this.items[s[a][r]].QUANTITY)}if(!this.items[s[a][n]].HAS_SIMILAR_ITEMS||this.items[s[a][n]].SIMILAR_ITEMS_QUANTITY!=i||this.items[s[a][n]].TOTAL_SIMILAR_ITEMS_QUANTITY!=e){t.push(s[a][n]);this.items[s[a][n]].HAS_SIMILAR_ITEMS=true;this.items[s[a][n]].SIMILAR_ITEMS_QUANTITY=i;this.items[s[a][n]].TOTAL_SIMILAR_ITEMS_QUANTITY=e;this.items[s[a][n]].ALL_AVAILABLE_QUANTITY=this.items[s[a][n]].AVAILABLE_QUANTITY;this.items[s[a][n]].AVAILABLE_QUANTITY=this.items[s[a][n]].ALL_AVAILABLE_QUANTITY-i}}}else if(s[a][0]&&this.items[s[a][0]].HAS_SIMILAR_ITEMS){t.push(s[a][0]);delete this.items[s[a][0]].HAS_SIMILAR_ITEMS;delete this.items[s[a][0]].SIMILAR_ITEMS_QUANTITY;delete this.items[s[a][0]].TOTAL_SIMILAR_ITEMS_QUANTITY;this.items[s[a][0]].AVAILABLE_QUANTITY=this.items[s[a][0]].ALL_AVAILABLE_QUANTITY;delete this.items[s[a][0]].ALL_AVAILABLE_QUANTITY}}}return t},getHashMap:function(){var t={};for(var i in this.items){if(this.items.hasOwnProperty(i)&&this.isItemAvailable(i)){if(!t.hasOwnProperty(this.items[i].HASH)){t[this.items[i].HASH]=[]}t[this.items[i].HASH].push(i)}}return t},isItemAvailable:function(t){var i=this.filter.isActive()?this.filter.realSortedItems:this.sortedItems;return!this.items[t].NOT_AVAILABLE&&!this.items[t].SHOW_RESTORE&&BX.util.in_array(t,i)},checkTotalAnimation:function(t){if(this.result&&this.result.TOTAL_RENDER_DATA&&parseFloat(this.result.TOTAL_RENDER_DATA.PRICE)>parseFloat(t.PRICE)){t.PRICE_NEW=t.PRICE;t.PRICE=this.result.TOTAL_RENDER_DATA.PRICE;t.PRICE_FORMATED_NEW=t.PRICE_FORMATED;t.PRICE_FORMATED=this.result.TOTAL_RENDER_DATA.PRICE_FORMATED;this.addPriceAnimationData(this.ids.total,t.PRICE,t.PRICE_NEW,t.CURRENCY)}return t},checkBasketItemsAnimation:function(t){var i=t.ID;if(this.items[i]){var e=BX(this.ids.quantity+i);if(BX.type.isDomNode(e)&&!this.actionPool.isItemInPool(i)&&parseFloat(e.value)!==parseFloat(t.QUANTITY)){t.QUANTITY_ANIMATION=true;this.actionPool.clearLastActualQuantityPool(i)}if(parseFloat(this.items[i].PRICE)>parseFloat(t.PRICE)){t.PRICE_NEW=t.PRICE;t.PRICE=this.items[i].PRICE;t.PRICE_FORMATED_NEW=t.PRICE_FORMATED;t.PRICE_FORMATED=this.items[i].PRICE_FORMATED;this.addPriceAnimationData(this.ids.price+i,t.PRICE,t.PRICE_NEW,t.CURRENCY)}if(BX.util.in_array("SUM",this.params.COLUMNS_LIST)&&parseFloat(this.items[i].SUM_PRICE)>parseFloat(t.SUM_PRICE)&&parseFloat(this.items[i].QUANTITY)===parseFloat(t.QUANTITY)){t.SUM_PRICE_NEW=t.SUM_PRICE;t.SUM_PRICE=this.items[i].SUM_PRICE;t.SUM_PRICE_FORMATED_NEW=t.SUM_PRICE_FORMATED;t.SUM_PRICE_FORMATED=this.items[i].SUM_PRICE_FORMATED;this.addPriceAnimationData(this.ids.sumPrice+i,t.SUM_PRICE,t.SUM_PRICE_NEW,t.CURRENCY)}}return t},getData:function(t){t=t||{};t[this.params.ACTION_VARIABLE]=this.lastAction;t.via_ajax="Y";t.site_id=this.siteId;t.site_template_id=this.siteTemplateId;t.sessid=BX.bitrix_sessid();t.template=this.template;t.signedParamsString=this.signedParamsString;return t},startLoader:function(){},endLoader:function(){},editWarnings:function(){this.editGeneralWarnings();this.editBasketItemWarnings();this.toggleWarningBlock();this.showWarningItemsCount()},editGeneralWarnings:function(){var t=this.getEntity(this.getCacheNode(this.ids.warning),"basket-general-warnings");if(BX.type.isDomNode(t)){var i=t.innerHTML;if(this.result.WARNING_MESSAGE_WITH_CODE){for(var e in this.result.WARNING_MESSAGE_WITH_CODE){if(this.result.WARNING_MESSAGE_WITH_CODE.hasOwnProperty(e)){if(!this.items[e]&&i.indexOf(this.result.WARNING_MESSAGE_WITH_CODE[e])===-1){i+=this.result.WARNING_MESSAGE_WITH_CODE[e]+"<br/>"}}}}if(i){t.innerHTML=i;t.style.display=""}else{t.style.display="none";t.innerHTML=""}}},editBasketItemWarnings:function(){var t=this.getEntity(this.getCacheNode(this.ids.warning),"basket-item-warnings");if(BX.type.isDomNode(t)){if(this.warningItems.length){var i=this.getEntity(t,"basket-items-warning-count");if(BX.type.isDomNode(i)){i.innerHTML=this.warningItems.length+" "+this.getGoodsMessage(this.warningItems.length)}t.style.display=""}else if(t.style.display!=="none"){t.style.display="none";if(this.filter.isActive()){this.toggleFilter("all")}}}},toggleWarningBlock:function(){var t=this.getCacheNode(this.ids.warning);if(BX.type.isDomNode(t)){var i=this.getEntity(t,"basket-general-warnings");var e=this.getEntity(t,"basket-item-warnings");if((!BX.type.isDomNode(i)||i.style.display==="none")&&(!BX.type.isDomNode(e)||e.style.display==="none")){t.style.display="none"}else{t.style.display=""}}},checkBasketItemWarnings:function(t,i){if(!t)return;var e;if(this.items[t.ID]&&this.lastAction==="refreshAjax"){e=this.items[t.ID].WARNINGS}else{e=[]}if(BX.type.isArray(i[t.ID])&&i[t.ID].length){for(var s in i[t.ID]){if(i[t.ID].hasOwnProperty(s)&&!BX.util.in_array(i[t.ID][s],e)){e.push(i[t.ID][s])}}}if(e.length){if(!BX.util.in_array(t.ID,this.warningItems)){this.warningItems.push(t.ID)}}else if(BX.util.in_array(t.ID,this.warningItems)){this.warningItems.splice(BX.util.array_search(t.ID,this.warningItems),1)}return e},removeAllWarnings:function(t){this.clearGeneralWarnings();this.clearBasketItemsWarnings();this.editWarnings();t&&t.preventDefault()},clearGeneralWarnings:function(){this.result.WARNING_MESSAGE_WITH_CODE={};var t=this.getEntity(this.getCacheNode(this.ids.warning),"basket-general-warnings");if(BX.type.isDomNode(t)){t.innerHTML=""}},clearBasketItemsWarnings:function(){var t=[];for(var i in this.warningItems){if(this.warningItems.hasOwnProperty(i)){this.items[this.warningItems[i]].WARNINGS=[];if(this.isItemShown(this.warningItems[i])){t.push(this.warningItems[i])}}}this.warningItems=[];this.editBasketItems(t)},isItemShown:function(t){return BX.util.in_array(t,this.shownItems)},initializeBasketItems:function(){if(Object.keys(this.items).length===0)return;for(var t=0;t<this.sortedItems.length;t++){if(this.useDynamicScroll&&this.shownItems.length>=this.maxItemsShowCount){break}this.createBasketItem(this.sortedItems[t])}},createBasketItem:function(t){if(!this.items[t]){return}var i=this.getTemplate("basket-item-template");if(i){var e=this.renderBasketItem(i,this.items[t]);var s=BX.util.array_search(t,this.sortedItems);if(this.shownItems.length&&s>=0){if(s<BX.util.array_search(this.shownItems[0],this.sortedItems)){BX(this.ids.item+this.shownItems[0]).insertAdjacentHTML("beforebegin",e);this.shownItems.unshift(t)}else if(s>BX.util.array_search(this.shownItems[this.shownItems.length-1],this.sortedItems)){BX(this.ids.item+this.shownItems[this.shownItems.length-1]).insertAdjacentHTML("afterend",e);this.shownItems.push(t)}else{BX(this.ids.item+this.sortedItems[s+1]).insertAdjacentHTML("beforebegin",e);this.shownItems.splice(s+1,0,t)}}else{this.getCacheNode(this.ids.itemListTable).insertAdjacentHTML("beforeend",e);this.shownItems.push(t)}this.bindBasketItemEvents(this.items[t]);if(this.filter.isActive()){this.filter.highlightSearchMatch(this.items[t])}}},getItemsToEdit:function(){var t=[];if(this.isBasketChanged()){for(var i in this.changedItems){if(this.changedItems.hasOwnProperty(i)&&this.isItemShown(this.changedItems[i])){t.push(this.changedItems[i])}}}return t},getItemsAfter:function(){var t=[];if(this.useDynamicScroll){var i=this.shownItems[this.shownItems.length-1]||false;if(i){var e=0;var s=BX.util.array_search(i,this.sortedItems);while(this.sortedItems[++s]&&e++<this.maxItemsShowCount){t.push(this.sortedItems[s])}}}return t},editBasketItems:function(t){if(!t||t.length===0){return}var i,e;for(i in t){if(!t.hasOwnProperty(i)||!BX.type.isPlainObject(this.items[t[i]])){continue}e=this.items[t[i]];if(this.actionPool.isItemInPool(e.ID)){if(!BX.util.in_array(e.ID,this.postponedItems)){this.postponedItems.push(e.ID)}continue}if(BX.type.isDomNode(BX(this.ids.item+e.ID))){this.redrawBasketItemNode(e.ID);this.applyQuantityAnimation(e.ID)}else{this.createBasketItem(e.ID)}}},editPostponedBasketItems:function(){if(!this.postponedItems.length)return;var t=[];for(var i in this.postponedItems){if(this.postponedItems.hasOwnProperty(i)&&this.isItemShown(this.postponedItems[i])){t.push(this.postponedItems[i])}}this.postponedItems=[];this.editBasketItems(t)},applyQuantityAnimation:function(t){var i=BX(this.ids.item+t);if(BX.type.isDomNode(i)&&this.items[t]){if(this.items[t].QUANTITY_ANIMATION){BX.addClass(BX(this.ids.quantity+t),"basket-updated")}}},applyPriceAnimation:function(){if(!this.priceAnimationData||Object.keys(this.priceAnimationData.start).length===0)return;var t=this.priceAnimationData,i={};new BX.easing({duration:this.params.USE_PRICE_ANIMATION==="Y"?this.duration.priceAnimation:1,start:t.start,finish:t.finish,transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:BX.delegate(function(e){for(var s in t.start){if(t.start.hasOwnProperty(s)){if(!i[s]){if(s===this.ids.total){i[s]=this.getEntities(this.getCacheNode(this.ids.basketRoot),this.ids.total)}else{var a=BX(s);i[s]=a?[a]:[]}}if(!t.int[s]){e[s]=(e[s]+e[s]%1e3/1e3).toFixed(5)}for(var n=0;n<i[s].length;n++){i[s][n].innerHTML=this.getFormatPrice(e[s],t.currency[s])}}}},this),complete:BX.delegate(function(){var e,s,a,n;for(e in t.start){if(t.start.hasOwnProperty(e)){s=this.getFormatPrice(t.finish[e],t.currency[e]);for(var r=0;r<i[e].length;r++){i[e][r].innerHTML=s}if(e.indexOf(this.ids.sumPrice)!==-1){n="SUM_PRICE";a=e.substr(this.ids.sumPrice.length)}else if(e.indexOf(this.ids.price)!==-1){n="PRICE";a=e.substr(this.ids.price.length)}else if(e.indexOf(this.ids.total)!==-1){n="TOTAL";a=""}else{a="";n=""}if(BX.type.isNotEmptyString(n)){if(a){this.items[a][n]=t.finish[e];delete this.items[a][n+"_NEW"];this.items[a][n+"_FORMATED"]=s;delete this.items[a][n+"_FORMATED_NEW"]}else if(n==="TOTAL"){this.result.TOTAL_RENDER_DATA.PRICE=t.finish[e];delete this.result.TOTAL_RENDER_DATA.PRICE_NEW;this.result.TOTAL_RENDER_DATA.PRICE_FORMATED=s;delete this.result.TOTAL_RENDER_DATA.PRICE_FORMATED_NEW}}}}this.filter.highlightFoundItems()},this)}).animate()},getFormatPrice:function(t,i){return BX.Currency.currencyFormat(t,i,true)},deleteBasketItems:function(t,i,e){if(!t||!t.length){return}for(var s in t){if(t.hasOwnProperty(s)){this.deleteBasketItem(t[s],i,e)}}},deleteBasketItem:function(t,i,e){if(this.items[t].NOT_AVAILABLE&&i){i=false;e=true}if(i){this.items[t].SHOW_RESTORE=true;this.items[t].SHOW_LOADING=false;this.redrawBasketItemNode(t)}else{this.changeShownItem(t);BX.remove(BX(this.ids.item+t))}if(e){this.changeSortedItem(t,false,true);this.changeShownItem(t,false,true)}},addSortedItem:function(t,i){this.sortedItems.push(t.toString());if(i&&this.filter.isActive()){this.filter.realSortedItems.push(t.toString())}},changeSortedItem:function(t,i,e){var s=BX.util.array_search(t,this.sortedItems);if(s>=0){if(i){this.sortedItems.splice(s,1,i.toString())}else{this.sortedItems.splice(s,1)}}if(e&&this.filter.isActive()){s=BX.util.array_search(t,this.filter.realSortedItems);if(s>=0){if(i){this.filter.realSortedItems.splice(s,1,i.toString())}else{this.filter.realSortedItems.splice(s,1)}}}},sortSortedItems:function(t){this.sortedItems.sort(BX.proxy(this.itemSortFunction,this));if(t&&this.filter.isActive()){this.filter.realSortedItems.sort(BX.proxy(this.itemSortFunction,this))}},changeShownItem:function(t,i,e){var s=BX.util.array_search(t,this.shownItems);if(s>=0){if(i){this.shownItems.splice(s,1,i.toString())}else{this.shownItems.splice(s,1)}}if(e&&this.filter.isActive()){s=BX.util.array_search(t,this.filter.realShownItems);if(s>=0){if(i){this.filter.realShownItems.splice(s,1,i.toString())}else{this.filter.realShownItems.splice(s,1)}}}},redrawBasketItemNode:function(t){var i=BX(this.ids.item+t);if(!this.items[t]||!BX.type.isDomNode(i))return;var e=this.getTemplate("basket-item-template");if(e){var s=BX(this.ids.itemHeightAligner+t),a;if(BX.type.isDomNode(s)){a=s.clientHeight}var n=this.renderBasketItem(e,this.items[t]);i.insertAdjacentHTML("beforebegin",n);BX.remove(i);if(a){s=BX(this.ids.itemHeightAligner+t);if(BX.type.isDomNode(s)&&s.clientHeight<a){s.style.minHeight=a+"px";setTimeout(function(){s.style.minHeight="0px"},1)}}this.bindBasketItemEvents(this.items[t]);if(this.filter.isActive()){this.filter.highlightSearchMatch(this.items[t])}}},restoreBasketItems:function(t){if(!t||Object.keys(t).length===0){return}var i,e,s;for(i in t){if(t.hasOwnProperty(i)){e=t[i];if(this.isItemShown(i)){this.changeShownItem(i,e,true);s=BX(this.ids.item+i);if(BX.type.isDomNode(s)){s.id=this.ids.item+e;s.setAttribute("data-id",e)}}this.changeSortedItem(i,false,true)}}},bindBasketItemEvents:function(t){if(!t)return;var i=BX(this.ids.item+t.ID);if(BX.type.isDomNode(i)){this.bindQuantityEvents(i,t);this.bindSkuEvents(i,t);this.bindImageEvents(i,t);this.bindActionEvents(i,t);this.bindRestoreAction(i,t);this.bindItemWarningEvents(i,t)}},bindQuantityEvents:function(t,i){if(!t||!i||!this.isItemAvailable(i.ID))return;var e;var s=this.getEntity(t,"basket-item-quantity-block");if(s){var a=this.isTouch?"touchstart":"mousedown";var n=this.isTouch?"touchend":"mouseup";e=this.getEntity(s,"basket-item-quantity-minus");BX.bind(e,a,BX.proxy(this.startQuantityInterval,this));BX.bind(e,n,BX.proxy(this.clearQuantityInterval,this));BX.bind(e,"mouseout",BX.proxy(this.clearQuantityInterval,this));BX.bind(e,"click",BX.proxy(this.quantityMinus,this));e=this.getEntity(s,"basket-item-quantity-plus");BX.bind(e,a,BX.proxy(this.startQuantityInterval,this));BX.bind(e,n,BX.proxy(this.clearQuantityInterval,this));BX.bind(e,"mouseout",BX.proxy(this.clearQuantityInterval,this));BX.bind(e,"click",BX.proxy(this.quantityPlus,this));e=this.getEntity(s,"basket-item-quantity-field");BX.bind(e,"change",BX.proxy(this.quantityChange,this))}},startQuantityInterval:function(){var t=BX.proxy_context;var i=t.getAttribute("data-entity")==="basket-item-quantity-minus"?BX.proxy(this.quantityMinus,this):BX.proxy(this.quantityPlus,this);this.quantityDelay=setTimeout(BX.delegate(function(){this.quantityTimer=setInterval(function(){i(t)},150)},this),300)},clearQuantityInterval:function(){clearTimeout(this.quantityDelay);clearInterval(this.quantityTimer)},quantityPlus:function(t){if(!BX.type.isDomNode(t)){t=BX.proxy_context;this.clearQuantityInterval()}var i=this.getItemDataByTarget(t);if(i){var e=BX(this.ids.quantity+i.ID);var s=this.isQuantityFloat(i);var a=s?parseFloat(e.value):Math.round(e.value);var n=s?parseFloat(i.MEASURE_RATIO):parseInt(i.MEASURE_RATIO);var r=parseFloat((a+n).toFixed(5));r=this.getCorrectQuantity(i,r);this.setQuantity(i,r)}},quantityMinus:function(t){t=BX.type.isDomNode(t)?t:BX.proxy_context;var i=this.getItemDataByTarget(t);if(i){var e=BX(this.ids.quantity+i.ID);var s=this.isQuantityFloat(i);var a=s?parseFloat(e.value):Math.round(e.value);var n=s?parseFloat(i.MEASURE_RATIO):parseInt(i.MEASURE_RATIO);var r=parseFloat((a-n).toFixed(5));r=this.getCorrectQuantity(i,r);this.setQuantity(i,r)}},quantityChange:function(){var t=this.getItemDataByTarget(BX.proxy_context);if(t){var i,e;i=BX(this.ids.quantity+t.ID);e=this.getCorrectQuantity(t,i.value);this.setQuantity(t,e)}},isQuantityFloat:function(t){return this.params.QUANTITY_FLOAT==="Y"||parseInt(t.MEASURE_RATIO)!==parseFloat(t.MEASURE_RATIO)},getCorrectQuantity:function(t,i){var e=this.isQuantityFloat(t),s=e?parseFloat(t.MEASURE_RATIO):parseInt(t.MEASURE_RATIO),a=0;i=(e?parseFloat(i):parseInt(i,10))||0;if(i<0){i=0}if(s>0&&i<s){i=s}if(t.CHECK_MAX_QUANTITY==="Y"){a=e?parseFloat(t.AVAILABLE_QUANTITY):parseInt(t.AVAILABLE_QUANTITY);if(a>0&&i>a){i=a}}var n=(i/s-(i/s).toFixed(0)).toFixed(5),r;if(parseFloat(n)===0){return i}if(s!==0&&s!==1){r=i*this.precisionFactor%(s*this.precisionFactor)/this.precisionFactor;if(s>0&&r>0){if(r>=s/2&&(a===0||i+s-r<=a)){i+=s-r}else{i-=r}}}i=e?parseFloat(i):parseInt(i,10);return i},setQuantity:function(t,i){var e=BX(this.ids.quantity+t.ID),s;if(e){i=parseFloat(i);s=parseFloat(e.getAttribute("data-value"));e.value=i;if(parseFloat(t.QUANTITY)!==parseFloat(i)){this.animatePriceByQuantity(t,i);this.actionPool.changeQuantity(t.ID,i,s)}}},animatePriceByQuantity:function(t,i){var e=BX(this.ids.sumPrice+t.ID);if(!BX.type.isDomNode(e))return;var s=i/parseFloat(t.MEASURE_RATIO);var a=parseFloat(t.SUM_PRICE),n=parseFloat(t.PRICE)*s,r=parseInt(a)===parseFloat(a)&&parseInt(n)===parseFloat(n);if(a!==n){this.items[t.ID].QUANTITY=i;this.items[t.ID].SUM_PRICE=n;new BX.easing({duration:this.params.USE_PRICE_ANIMATION==="Y"?this.duration.priceAnimation:1,start:{price:a},finish:{price:n},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:BX.delegate(function(i){if(!r){i.price=(i.price+i.price%1e3/1e3).toFixed(5)}e.innerHTML=this.getFormatPrice(i.price,t.CURRENCY)},this),complete:BX.delegate(function(){var i,a;e.innerHTML=this.getFormatPrice(n,t.CURRENCY);i=BX(this.ids.sumPriceOld+t.ID);if(BX.type.isDomNode(i)){a=parseFloat(t.FULL_PRICE)*s;i.innerHTML=this.getFormatPrice(a,t.CURRENCY)}i=BX(this.ids.sumPriceDiff+t.ID);if(BX.type.isDomNode(i)){a=parseFloat(t.DISCOUNT_PRICE)*s;i.innerHTML=this.getFormatPrice(a,t.CURRENCY)}},this)}).animate()}},getItemDataByTarget:function(t){var i=false;var e;var s=BX.findParent(t,{attrs:{"data-entity":"basket-item"}});if(s){e=s.getAttribute("data-id");i=this.items[e]}return i},bindSkuEvents:function(t,i){if(!t||!i)return;var e=this.getEntities(t,"basket-item-sku-block");var s,a,n,r,o;for(a=0,n=e.length;a<n;a++){s=this.getEntities(e[a],"basket-item-sku-field");for(r=0,o=s.length;r<o;r++){BX.bind(s[r],"click",BX.proxy(this.changeSku,this))}}},changeSku:function(){var t,i;var e=BX.proxy_context;if(BX.hasClass(e,"selected"))return;var s=this.getItemDataByTarget(e);if(s){var a=BX(this.ids.item+s.ID);if(a){var n=this.getEntities(e.parentNode,"basket-item-sku-field");for(t=0,i=n.length;t<i;t++){if(n[t].isEqualNode(e)){BX.addClass(n[t],"selected")}else{BX.removeClass(n[t],"selected")}}this.actionPool.changeSku(s.ID,this.getSkuPropertyValues(a),this.getInitialSkuPropertyValues(a))}}},getSkuPropertyValues:function(t){var i={};var e=this.getEntities(t,"basket-item-sku-field",".selected");for(var s=0,a=e.length;s<a;s++){i[e[s].getAttribute("data-property")]=BX.util.htmlspecialcharsback(e[s].getAttribute("data-value-id"))}return i},getInitialSkuPropertyValues:function(t){var i={};var e=this.getEntities(t,"basket-item-sku-field",'[data-initial="true"]');for(var s=0,a=e.length;s<a;s++){i[e[s].getAttribute("data-property")]=BX.util.htmlspecialcharsback(e[s].getAttribute("data-value-id"))}return i},bindImageEvents:function(t,i){if(!t||!i)return;var e=t.querySelectorAll(".basket-item-custom-block-photo-item");for(var s=0,a=e.length;s<a;s++){BX.bind(e[s],"click",BX.proxy(this.showPropertyImagePopup,this))}},showPropertyImagePopup:function(){var t,i,e,s,a,n;t=BX.proxy_context;s=this.getItemDataByTarget(t);i=t.getAttribute("data-column-property-code");e=t.getAttribute("data-image-index");if(s&&s.COLUMN_LIST){for(n in s.COLUMN_LIST){if(s.COLUMN_LIST.hasOwnProperty(n)&&s.COLUMN_LIST[n].CODE===i&&s.COLUMN_LIST[n].VALUE[e]){a=s.COLUMN_LIST[n].VALUE[e].IMAGE_SRC_ORIGINAL;break}}}if(!a){return}if(this.imagePopup){this.imagePopup.destroy()}var r="bx-soa-image-popup-content";var o=this;this.imagePopup=new BX.PopupWindow("bx-soa-image-popup",null,{lightShadow:true,offsetTop:0,offsetLeft:0,closeIcon:{top:"3px",right:"10px"},autoHide:true,bindOptions:{position:"bottom"},closeByEsc:true,zIndex:100,events:{onPopupShow:function(){BX.create("IMG",{props:{src:a},events:{load:function(){var t=BX(r);if(t){var i=BX.GetWindowInnerSize(),e=o.isMobile?.5:.9,s,a;BX.cleanNode(t);t.appendChild(this);s=t.offsetHeight;a=t.offsetWidth;if(s>i.innerHeight*e){t.style.height=i.innerHeight*e+"px";t.style.width=a*(i.innerHeight*e/s)+"px";s=t.offsetHeight;a=t.offsetWidth}if(a>i.innerWidth*e){t.style.width=i.innerWidth*e+"px";t.style.height=s*(i.innerWidth*e/a)+"px"}t.style.height=t.offsetHeight+"px";t.style.width=t.offsetWidth+"px";o.imagePopup.adjustPosition()}}}})},onPopupClose:function(){this.destroy()}},content:BX.create("DIV",{props:{id:r}})});this.imagePopup.show()},bindActionEvents:function(t,i){if(!t||!i)return;var e;if(BX.util.in_array("DELETE",this.params.COLUMNS_LIST)){e=this.getEntities(t,"basket-item-delete");for(var s=0,a=e.length;s<a;s++){BX.bind(e[s],"click",BX.proxy(this.deleteAction,this))}}if(BX.util.in_array("DELAY",this.params.COLUMNS_LIST)){e=this.getEntity(t,"basket-item-add-delayed");BX.bind(e,"click",BX.proxy(this.addDelayedAction,this))}e=this.getEntity(t,"basket-item-remove-delayed");BX.bind(e,"click",BX.proxy(this.removeDelayedAction,this));e=this.getEntity(t,"basket-item-merge-sku-link");BX.bind(e,"click",BX.proxy(this.mergeAction,this));e=this.getEntity(t,"basket-item-show-similar-link");BX.bind(e,"click",BX.delegate(function(){this.toggleFilter("similar")},this))},deleteAction:function(){var t=this.getItemDataByTarget(BX.proxy_context);if(t){this.actionPool.deleteItem(t.ID);this.items[t.ID].SHOW_LOADING=true;if(this.params.SHOW_RESTORE==="Y"&&this.isItemAvailable(t.ID)){this.items[t.ID].SHOW_RESTORE=true}this.redrawBasketItemNode(t.ID)}},addDelayedAction:function(){var t=this.getItemDataByTarget(BX.proxy_context);if(t){this.actionPool.addDelayed(t.ID);this.items[t.ID].SHOW_LOADING=true;this.redrawBasketItemNode(t.ID)}},removeDelayedAction:function(){var t=this.getItemDataByTarget(BX.proxy_context);if(t){this.actionPool.removeDelayed(t.ID);this.items[t.ID].SHOW_LOADING=true;this.redrawBasketItemNode(t.ID)}},mergeAction:function(){var t=this.getItemDataByTarget(BX.proxy_context);if(t){this.actionPool.mergeSku(t.ID)}},bindRestoreAction:function(t,i){if(!t||!i||this.params.SHOW_RESTORE!=="Y")return;BX.bind(this.getEntity(t,"basket-item-restore-button"),"click",BX.delegate(function(){this.actionPool.restoreItem(i.ID,{PRODUCT_ID:i.PRODUCT_ID,QUANTITY:i.QUANTITY,PROPS:i.PROPS_ALL,SORT:i.SORT,MODULE:i.MODULE,PRODUCT_PROVIDER_CLASS:i.PRODUCT_PROVIDER_CLASS});this.items[i.ID].SHOW_RESTORE=false;this.items[i.ID].SHOW_LOADING=true;this.redrawBasketItemNode(i.ID)},this));BX.bind(this.getEntity(t,"basket-item-close-restore-button"),"click",BX.delegate(function(){this.deleteBasketItem(i.ID,false,true)},this))},bindItemWarningEvents:function(t,i){if(!t||!i)return;BX.bind(this.getEntity(BX(this.ids.item+i.ID),"basket-item-warning-close"),"click",BX.proxy(this.closeItemWarnings,this))},closeItemWarnings:function(){var t=BX.proxy_context;if(BX.type.isDomNode(t)){var i=this.getItemDataByTarget(t);this.items[i.ID].WARNINGS=[];this.warningItems.splice(BX.util.array_search(i.ID,this.warningItems),1);this.redrawBasketItemNode(i.ID);this.editWarnings()}},renderBasketItem:function(t,i){var e=BX.clone(i);if(BX.type.isPlainObject(e)){e.USE_FILTER=this.useItemsFilter&&!this.filter.currentFilter.similarHash.length}return Mustache.render(t,e)},render:function(t,i){return Mustache.render(t,i)},checkAnalytics:function(t){if(!t||!t.basket)return;var i,e={};for(var s in t.basket){if(t.basket.hasOwnProperty(s)){if(s.indexOf("QUANTITY_")>=0){i=s.substr(9);if(this.items[i]){e[i]=parseFloat(t.basket[s])-parseFloat(BX(this.ids.quantity+i).getAttribute("data-value"))}}else if(s.indexOf("DELETE_")>=0){i=s.substr(7);if(this.items[i]){e[i]=-parseFloat(this.items[i].QUANTITY)}}else if(s.indexOf("RESTORE_")>=0){i=s.substr(8);if(this.items[i]){e[i]=parseFloat(this.items[i].QUANTITY)}}}}this.setAnalyticsDataLayer(e)},setAnalyticsDataLayer:function(t){if(!t||Object.keys(t).length===0)return;window[this.params.DATA_LAYER_NAME]=window[this.params.DATA_LAYER_NAME]||[];var i=[],e=[];for(var s in t){if(t.hasOwnProperty(s)){if(t[s]>0){i.push(this.getItemAnalyticsInfo(s,t[s]))}else if(t[s]<0){e.push(this.getItemAnalyticsInfo(s,t[s]))}}}if(i.length){window[this.params.DATA_LAYER_NAME].push({event:"addToCart",ecommerce:{currencyCode:this.items[s].CURRENCY||"",add:{products:i}}})}if(e.length){window[this.params.DATA_LAYER_NAME].push({event:"removeFromCart",ecommerce:{currencyCode:this.items[s].CURRENCY||"",remove:{products:e}}})}},getItemAnalyticsInfo:function(t,i){if(!this.items[t])return{};var e=(this.items[t].BRAND||"").split(",  ").join("/");var s=[];var a=this.getEntities(BX(this.ids.item+t),"basket-item-sku-field",".selected");for(var n=0,r=a.length;n<r;n++){s.push(a[n].getAttribute("data-sku-name"))}return{name:this.items[t].NAME||"",id:this.items[t].PRODUCT_ID||"",price:this.items[t].PRICE||0,brand:e,variant:s.join("/"),quantity:Math.abs(i)}}}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/components/bitrix/sale.products.gift.basket/templates/.default/script.min.js?17472039803259";s:6:"source";s:80:"/bitrix/components/bitrix/sale.products.gift.basket/templates/.default/script.js";s:3:"min";s:84:"/bitrix/components/bitrix/sale.products.gift.basket/templates/.default/script.min.js";s:3:"map";s:84:"/bitrix/components/bitrix/sale.products.gift.basket/templates/.default/script.map.js";}"*/
(function(){"use strict";if(!!window.JCSaleProductsGiftBasketComponent)return;window.JCSaleProductsGiftBasketComponent=function(t){this.formPosting=false;this.siteId=t.siteId||"";this.template=t.template||"";this.componentPath=t.componentPath||"";this.parameters=t.parameters||"";this.container=document.querySelector('[data-entity="'+t.container+'"]');this.currentProductId=t.currentProductId;if(t.initiallyShowHeader){BX.ready(BX.proxy(this.showHeader,this))}if(t.deferredLoad){BX.ready(BX.proxy(this.deferredLoad,this))}BX.addCustomEvent("OnBasketChange",BX.proxy(this.reloadGifts,this));BX.addCustomEvent("OnCouponApply",BX.proxy(this.reloadGifts,this))};window.JCSaleProductsGiftBasketComponent.prototype={reloadGifts:function(){this.sendRequest({action:"deferredLoad",recalculateDiscounts:"Y"})},deferredLoad:function(){this.sendRequest({action:"deferredLoad"})},sendRequest:function(t){var e={siteId:this.siteId,template:this.template,parameters:this.parameters};BX.ajax({url:this.componentPath+"/ajax.php"+(document.location.href.indexOf("clear_cache=Y")!==-1?"?clear_cache=Y":""),method:"POST",dataType:"json",timeout:60,data:BX.merge(e,t),onsuccess:BX.delegate(function(e){if(!e||!e.JS){this.hideHeader();BX.cleanNode(this.container);return}BX.ajax.processScripts(BX.processHTML(e.JS).SCRIPT,false,BX.delegate(function(){this.showAction(e,t)},this))},this)})},showAction:function(t,e){if(!e)return;switch(e.action){case"deferredLoad":this.processDeferredLoadAction(t);break}},processDeferredLoadAction:function(t){if(!t)return;this.processItems(t.items)},processItems:function(t){if(!t)return;var e=BX.processHTML(t,false),i=BX.create("DIV");var a,n,s;i.innerHTML=e.HTML;s=this.container.querySelectorAll('[data-entity="items-row"]');if(s.length){BX.cleanNode(this.container);this.showHeader(false)}else{this.showHeader(true)}a=i.querySelectorAll('[data-entity="items-row"]');for(n in a){if(a.hasOwnProperty(n)){a[n].style.opacity=0;this.container.appendChild(a[n])}}new BX.easing({duration:2e3,start:{opacity:0},finish:{opacity:100},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(t){for(var e in a){if(a.hasOwnProperty(e)){a[e].style.opacity=t.opacity/100}}},complete:function(){for(var t in a){if(a.hasOwnProperty(t)){a[t].removeAttribute("style")}}}}).animate();BX.ajax.processScripts(e.SCRIPT)},showHeader:function(t){var e=BX.findParent(this.container,{attr:{"data-entity":"parent-container"}}),i;if(e&&BX.type.isDomNode(e)){i=e.querySelector('[data-entity="header"]');if(i&&i.getAttribute("data-showed")==="false"){i.style.display="";if(t){this.animation=new BX.easing({duration:2e3,start:{opacity:0},finish:{opacity:100},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(t){i.style.opacity=t.opacity/100},complete:function(){i.removeAttribute("style");i.setAttribute("data-showed","true")}});this.animation.animate()}else{i.style.opacity=100}}}},hideHeader:function(){var t=BX.findParent(this.container,{attr:{"data-entity":"parent-container"}}),e;if(t&&BX.type.isDomNode(t)){e=t.querySelector('[data-entity="header"]');if(e){if(this.animation){this.animation.stop()}e.style.display="none";e.style.opacity=0;e.setAttribute("data-showed","false")}}}}})();
/* End */
;; /* /bitrix/components/bitrix/sale.products.gift.section/templates/.default/script.min.js?17472039802727*/
; /* /bitrix/components/bitrix/catalog.item/templates/.default/script.min.js?174720395541322*/
; /* /local/templates/gn/components/bitrix/catalog.section/.default/script.min.js?17478244265563*/
; /* /local/templates/gn/components/bitrix/catalog.item/sdds/script.js?174843404563933*/
; /* /bitrix/components/bitrix/sale.basket.basket/templates/.default/js/action-pool.min.js?17472039794358*/
; /* /bitrix/components/bitrix/sale.basket.basket/templates/.default/js/filter.min.js?174720397910511*/
; /* /bitrix/components/bitrix/sale.basket.basket/templates/.default/js/component.min.js?174720397937537*/
; /* /bitrix/components/bitrix/sale.products.gift.basket/templates/.default/script.min.js?17472039803259*/

//# sourceMappingURL=page_3bb812e3df70b51e89f02967709fac9f.map.js