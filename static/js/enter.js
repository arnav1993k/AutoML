function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("task");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}
function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}
function ajax_request(url,method,data=null,func=null){
        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function() {
        // if (this.readyState == 4 && this.status == 200) {
        //         response = this.responseText;
        //         plot_training(response);
        //     }
        // };
        // xhttp.open("GET", url, false);
        // xhttp.send();
        if(method == "POST"){
            $.ajax({
                  type: "POST",
                  url: url,
                  data: data,
                  contentType: 'multipart/form-data',
                  success: function(response){
                    func(response);
                  },
                  dataType: "json"
                });
        }
        else{
        $.ajax({url: url,
                type: "get",
                beforeSend: function(){
            // Show image container
                    $('#cover-spin').show(0);
                },
               success: function(response){
                    $('#cover-spin').hide(0);
                    plot_training(response);
               },
               complete:function(){
                    $('#cover-spin').hide(0);
               }});
      }
    }
function ajaxFormSubmit(action,formId,func){
  form = $(formId);
  $.ajax({
                  type: "POST",
                  url: action,
                  data: form.serialize(),
                  success: function(response){
                    func(response);
                  },
                  dataType: "json"
                });
}
function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
  });
  $('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});
function replaceText(text){
  document.getElementById("text-entry").value = text.result;
}

function summarize(){
ajaxFormSubmit("./summarize","#summarize-form",replaceText);

}
function sliderChange(field){
  value = field.value;
  $("#ratio-value")[0].innerText = (value*0.01).toFixed(2);
}