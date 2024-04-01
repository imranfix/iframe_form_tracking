/postMessage/ 

<script>
  try {
      var postObject = JSON.stringify({
        event: 'iframeFormSubmit', 
        form: 'Contact Us'
      });
      parent.postMessage(postObject, 'https://dm-analyticsbd.com');
} catch(e) {
  window.console && window.console.log(e);
}
  </script>



/postMessage listener - / 

<script type="text/javascript">
(function(window) {

    addEvent(window, 'message', function(message) {
      try{
      var data = JSON.parse(message.data);
      var dataLayer = window.dataLayer || (window.dataLayer = []);
      if (data.event) {
        dataLayer.push({
          'event': data.event,
          'postMessageData': data
        });
      }
      }catch(e){}
    });

    // Cross-browser event listener
    function addEvent(el, evt, fn) {
      if (el.addEventListener) {
        el.addEventListener(evt, fn);
      } else if (el.attachEvent) {
        el.attachEvent('on' + evt, function(evt) {
          fn.call(el, evt);
        });
      } else if (typeof el['on' + evt] === 'undefined' || el['on' + evt] === null) {
        el['on' + evt] = function(evt) {
          fn.call(el, evt);
        };
      }
    }

  })(window);
</script>

