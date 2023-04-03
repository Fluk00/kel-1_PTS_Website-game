//Makan
$(document).ready(function(){
  var hitBtn = $('button.damage-makan'),
  hBar = $('.health-bar'),
  bar = hBar.find('.bar'),
  hit = hBar.find('.hit');
  setInterval(() => {
      var total = hBar.data('total');
      var value = hBar.data('value');
      var damage = Math.exp(+1);
      // damage = 100;
      var healthValue;
      var newValue = value - damage;

      if (value < 0) {
        value = 0; // make sure the value doesn't go below zero
      }
      var barWidth = (newValue / total) * 100;
      var hitWidth = (damage / value) * 100 + "%";
      
      hit.css('width', hitWidth);
      hBar.data('value', newValue);
      bar.css('width', barWidth + "%");

      healthValue = newValue; // assign the newValue to the global variable
      localStorage.setItem("health-Value", healthValue);
    }, 1000);
    
      hitBtn.on("click", function(){
          var total = hBar.data('total');
          value = hBar.data('value');
          if (value < 0) {
              log("you dead, reset");
              return;
          }
          // show hit bar and set the width
          hit.css('width', hitWidth);
          hBar.data('value', newValue);
      var damage = Math.exp(+3);
      // damage = 100;
      var newValue = value + damage;
      // calculate the percentage of the total width
      var barWidth = (newValue / total) * 100;
      var hitWidth = (damage / value) * 100 + "%";
      // show hit bar and set the width
      hit.css('width', hitWidth);
      hBar.data('value', newValue);
      healthValue = newValue;
      setTimeout(function(){
          hit.css({'width': '0'});
          bar.css('width', barWidth + "%");
      }, 1);
      //bar.css('width', total - value);
      hBar2 = $('.health-bar2'),
      bar2 = hBar2.find('.bar'),
      hit2 = hBar2.find('.hit');
      var total2 = hBar2.data('total');
      var value2 = hBar2.data('value');
      var damage2 = Math.exp(+2);
      // damage = 100;
      var newValue2 = value2 - damage2;

      if (value2 < 0) {
        value2 = 0; // make sure the value doesn't go below zero
      }
      var barWidth2 = (newValue2 / total2) * 100;
      var hitWidth2 = (damage2 / value2) * 100 + "%";
      
      hit2.css('width', hitWidth2);
      hBar2.data('value', newValue2);
      bar2.css('width', barWidth2 + "%");
      healthValue2 = newValue2;
      localStorage.setItem("health-Value", healthValue2);
          
      if( value < 0){
          log("DEAD");
      }
      
      // const valueGame = localStorage.getItem("value-score") || 0;
      // valueGame = Math.exp(valueGame);
      // var total = hBar.data('total');
      // var value = hBar.data('value');
      // damage = 100;
      // var newValue = value + valueGame;

      // if (value < 0) {
      //   value = 0; // make sure the value doesn't go below zero
      // }
      // var barWidth = (newValue / total) * 100;
      // var hitWidth = (valueGame / value) * 100 + "%";
      
      // hit.css('width', hitWidth);
      // bar.css('width', barWidth + 
      // hBar.data('value', newValue);"%");
      // healthValue = newValue;
      // localStorage.setItem("health-Value", healthValue);
  });
});
//Tidur
$(document).ready(function(){
  var hitBtn = $('button.damage-tidur'),
  hBar = $('.health-bar2'),
  bar = hBar.find('.bar'),
  hit = hBar.find('.hit');
  setInterval(() => {
      var total = hBar.data('total');
      var value = hBar.data('value');
      var damage = Math.exp(+1);
      // damage = 100;
      var tidurValue;
      var newValue = value - damage;

      if (value < 0) {
        value = 0; // make sure the value doesn't go below zero
      }
      var barWidth = (newValue / total) * 100;
      var hitWidth = (damage / value) * 100 + "%";
      
      hit.css('width', hitWidth);
      hBar.data('value', newValue);
      bar.css('width', barWidth + "%");
      tidurValue = newValue; // assign the newValue to the global variable
      localStorage.setItem("tidur-Value", tidurValue);
    }, 1000);
      hitBtn.on("click", function(){
          var total = hBar.data('total');
          value = hBar.data('value');
          if (value < 0) {
              log("you dead, reset");
              return;
          }
          // show hit bar and set the width
          hit.css('width', hitWidth);
          hBar.data('value', newValue);
      var damage = Math.exp(+4);
      // damage = 100;
      var newValue = value + damage;
      // calculate the percentage of the total width
      var barWidth = (newValue / total) * 100;
      var hitWidth = (damage / value) * 100 + "%";
      // show hit bar and set the width
      hit.css('width', hitWidth);
      hBar.data('value', newValue);
      tidurValue = newValue;
      setTimeout(function(){
          hit.css({'width': '0'});
          bar.css('width', barWidth + "%");
      }, 1);
      //bar.css('width', total - value);
      hBar2 = $('.health-bar'),
      bar2 = hBar2.find('.bar'),
      hit2 = hBar2.find('.hit');
      var total2 = hBar2.data('total');
      var value2 = hBar2.data('value');
      var damage2 = Math.exp(+2);
      // damage = 100;
      var newValue2 = value2 - damage2;

      if (value2 < 0) {
        value2 = 0; // make sure the value doesn't go below zero
      }
      var barWidth2 = (newValue2 / total2) * 100;
      var hitWidth2 = (damage2 / value2) * 100 + "%";
      
      hit2.css('width', hitWidth2);
      hBar2.data('value', newValue2);
      bar2.css('width', barWidth2 + "%");
      healthValue2 = newValue2;
      localStorage.setItem("tidur-Value", tidurValue2);
      if( value < 0){
          log("DEAD");
      }
  });
});
//Ngobat
$(document).ready(function(){
  var hitBtn = $('button.damage-obat'),
  hBar = $('.health-bar3'),
  bar = hBar.find('.bar'),
  hit = hBar.find('.hit');
  setInterval(() => {
      var total = hBar.data('total');
      var value = hBar.data('value');
      var damage = Math.exp(+1);
      // damage = 100;
      var ngobatValue;
      var newValue = value - damage;

      if (value < 0) {
        value = 0; // make sure the value doesn't go below zero
      }
      var barWidth = (newValue / total) * 100;
      var hitWidth = (damage / value) * 100 + "%";
      
      hit.css('width', hitWidth);
      hBar.data('value', newValue);
      bar.css('width', barWidth + "%");

      ngobatValue = newValue; // assign the newValue to the global variable
      localStorage.setItem("ngobat-Value", ngobatValue);
    }, 1000);
    
      hitBtn.on("click", function(){
          var total = hBar.data('total');
          value = hBar.data('value');
          if (value < 0) {
              log("you dead, reset");
              return;
          }
          // show hit bar and set the width
          hit.css('width', hitWidth);
          hBar.data('value', newValue);
      var damage = Math.exp(+3);
      // damage = 100;
      var newValue = value + damage;
      // calculate the percentage of the total width
      var barWidth = (newValue / total) * 100;
      var hitWidth = (damage / value) * 100 + "%";
      // show hit bar and set the width
      hit.css('width', hitWidth);
      hBar.data('value', newValue);
      ngobatValue = newValue;
      setTimeout(function(){
          hit.css({'width': '0'});
          bar.css('width', barWidth + "%");
      }, 1);
      //bar.css('width', total - value);
      hBar2 = $('.health-bar2'),
      bar2 = hBar2.find('.bar'),
      hit2 = hBar2.find('.hit');
      var total2 = hBar2.data('total');
      var value2 = hBar2.data('value');
      var damage2 = Math.exp(+2);
      // damage = 100;
      var newValue2 = value2 - damage2;

      if (value2 < 0) {
        value2 = 0; // make sure the value doesn't go below zero
      }
      var barWidth2 = (newValue2 / total2) * 100;
      var hitWidth2 = (damage2 / value2) * 100 + "%";
      
      hit2.css('width', hitWidth2);
      hBar2.data('value', newValue2);
      bar2.css('width', barWidth2 + "%");
      ngobatValue2 = newValue2;
      localStorage.setItem("ngobat-Value", ngobatValue2);
          
      if( value < 0){
          log("DEAD");
      }
  });
})

//main 1
$(document).ready(function(){
  var hitBtn = $('button.damage-main2'),
  hBar = $('.health-bar4'),
  bar = hBar.find('.bar'),
  hit = hBar.find('.hit');
  setInterval(() => {
    var total = hBar.data('total');
    var value = hBar.data('value');
    var damage = Math.exp(+1);
    // damage = 100;
    var main1Value;
    var newValue = value - damage;

    if (value < 0) {
      value = 0; // make sure the value doesn't go below zero
    }
    var barWidth = (newValue / total) * 100;
    var hitWidth = (damage / value) * 100 + "%";
    
    hit.css('width', hitWidth);
    hBar.data('value', newValue);
    bar.css('width', barWidth + "%");

    main1Value = newValue; // assign the newValue to the global variable
    localStorage.setItem("main1-Value", main1Value);
  }, 1000);
  
      hitBtn.on("click", function(){
          var total = hBar.data('total');
          value = hBar.data('value');
          if (value < 0) {
              log("you dead, reset");
              return;
          }
          // show hit bar and set the width
          hit.css('width', hitWidth);
          hBar.data('value', newValue);
      var damage = Math.exp(+10);
      // damage = 100;
      var newValue = value + damage;
      // calculate the percentage of the total width
      var barWidth = (newValue / total) * 100;
      var hitWidth = (damage / value) * 100 + "%";
      // show hit bar and set the width
      hit.css('width', hitWidth);
      hBar.data('value', newValue);
      main1Value = newValue;
      setTimeout(function(){
          hit.css({'width': '0'});
          bar.css('width', barWidth + "%");
      }, 1);
      //bar.css('width', total - value);
      hBar2 = $('.health-bar1'),
      bar2 = hBar2.find('.bar'),
      hit2 = hBar2.find('.hit');
      var total2 = hBar2.data('total');
      var value2 = hBar2.data('value');
      var damage2 = Math.exp(+3);
      // damage = 100;
      var newValue2 = value2 - damage2;

      if (value2 < 0) {
        value2 = 0; // make sure the value doesn't go below zero
      }
      var barWidth2 = (newValue2 / total2) * 100;
      var hitWidth2 = (damage2 / value2) * 100 + "%";
      
      hit2.css('width', hitWidth2);
      hBar2.data('value', newValue2);
      bar2.css('width', barWidth2 + "%");
      main1Value2 = newValue2;
      localStorage.setItem("tidur-Value", main1Value2);

      if( value < 0){
          log("DEAD");
      }
  });
});
// main 2
$(document).ready(function(){
  var hitBtn = $('button.damage-main2'),
  hBar = $('.health-bar4'),
  bar = hBar.find('.bar'),
  hit = hBar.find('.hit');
  setInterval(() => {
    var total = hBar.data('total');
    var value = hBar.data('value');
    var damage = Math.exp(+1);
    // damage = 100;
    var main2Value;
    var newValue = value - damage;

    if (value < 0) {
      value = 0; // make sure the value doesn't go below zero
    }
    var barWidth = (newValue / total) * 100;
    var hitWidth = (damage / value) * 100 + "%";
    
    hit.css('width', hitWidth);
    hBar.data('value', newValue);
    bar.css('width', barWidth + "%");

    main2Value = newValue; // assign the newValue to the global variable
    localStorage.setItem("main2-Value", main2Value);
  }, 1000);

      hitBtn.on("click", function(){
          var total = hBar.data('total');
          value = hBar.data('value');
          if (value < 0) {
              log("you dead, reset");
              return;
          }
          // show hit bar and set the width
          hit.css('width', hitWidth);
          hBar.data('value', newValue);
      var damage = Math.exp(+10);
      // damage = 100;
      var newValue = value + damage;
      // calculate the percentage of the total width
      var barWidth = (newValue / total) * 100;
      var hitWidth = (damage / value) * 100 + "%";
      // show hit bar and set the width
      hit.css('width', hitWidth);
      hBar.data('value', newValue);
      main2Value = newValue;
      setTimeout(function(){
          hit.css({'width': '0'});
          bar.css('width', barWidth + "%");
      }, 1);
      //bar.css('width', total - value);
      hBar2 = $('.health-bar1'),
      bar2 = hBar2.find('.bar'),
      hit2 = hBar2.find('.hit');
      var total2 = hBar2.data('total');
      var value2 = hBar2.data('value');
      var damage2 = Math.exp(+3);
      // damage = 100;
      var newValue2 = value2 - damage2;

      if (value2 < 0) {
        value2 = 0; // make sure the value doesn't go below zero
      }
      var barWidth2 = (newValue2 / total2) * 100;
      var hitWidth2 = (damage2 / value2) * 100 + "%";
      
      hit2.css('width', hitWidth2);
      hBar2.data('value', newValue2);
      bar2.css('width', barWidth2 + "%");
      main2Value2 = main2Value2;
      localStorage.setItem("health-Value", main2Value2);

      if( value < 0){
          log("DEAD");
      }
  });
});

var hasChanged = false;
var timeoutId;

function changeImage() {
  const avatarImage = localStorage.getItem("avatarImage_s");
  var image = document.getElementById("avatar");
  if (!hasChanged && avatarImage === "kucing 1.png") {
    image.src = "kucingmakan.png";
    image.alt = "kucingmakan";
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
    image.src = "kucing 1.png";
    image.alt = "kucing1";

  }, 2000);

  } 

  else if (avatarImage === "anjing 1.png") {
    image.src = "anjingmakan.png";
    image.alt = "anjingmakan";
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
    image.src = "anjing 1.png";
    image.alt = "anjing1";

  }, 2000);

  } 

  else if (avatarImage === "ayam 1.png") {
    image.src = "ayammakan.png";
    image.alt = "ayammakan";
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
    image.src = "ayam 1.png";
    image.alt = "ayam1";

  }, 2000);

  } 
  
  
}

function changeImageTidur() {
  const avatarImage = localStorage.getItem("avatarImage_s");
  var image = document.getElementById("avatar");
  if (!hasChanged && avatarImage === "kucing 1.png") {
    image.src = "kucingtidur.png";
    image.alt = "kucingtidur";
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
    image.src = "kucing 1.png";
    image.alt = "kucing1";

  }, 2000);

  } 

  else if (avatarImage === "anjing 1.png") {
    image.src = "anjingtidur.png";
    image.alt = "anjingtidur";
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
    image.src = "anjing 1.png";
    image.alt = "anjing1";

  }, 2000);

  } 

  else if (avatarImage === "ayam 1.png") {
    image.src = "ayamtidur.png";
    image.alt = "ayamtidur";
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
    image.src = "ayam 1.png";
    image.alt = "ayam1";

  }, 2000);

  } 
  
  
}

function changeImageObat() {
  const avatarImage = localStorage.getItem("avatarImage_s");
  var image = document.getElementById("avatar");
  if (!hasChanged && avatarImage === "kucing 1.png") {
    image.src = "kucingngobat.png";
    image.alt = "kucingngobat";
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
    image.src = "kucing 1.png";
    image.alt = "kucing1";

  }, 2000);

  } 

  else if (avatarImage === "anjing 1.png") {
    image.src = "anjingngobat.png";
    image.alt = "anjingngobat";
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
    image.src = "anjing 1.png";
    image.alt = "anjing1";

  }, 2000);

  } 

  else if (avatarImage === "ayam 1.png") {
    image.src = "ayamngobat.png";
    image.alt = "ayamngobat";
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
    image.src = "ayam 1.png";
    image.alt = "ayam1";

  }, 2000);

  } 
  
  
}

// function changeImage() {
// const avatarImage = localStorage.getItem("avatarImage_s");
// var image = document.getElementById("avatar");
// if (avatarImage === "kucing 1.png") {
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(function() {
//     image.src = "kucingmakan.png";
//     image.alt = "Image 2";
//     hasChanged = false;
//   }, 3000);
// } 
// else if (avatarImage === "anjing 1.png") {
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(function() {
//     image.src = "anjingmakan.png";
//     image.alt = "Image 2";
//     hasChanged = false;
//   }, 3000);
// } 
// else if (avatarImage === "ayam 1.png") {
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(function() {
//     image.src = "ayammakan.png";
//     image.alt = "Image 2";
//     hasChanged = false;
//   }, 3000);
// } 

// }