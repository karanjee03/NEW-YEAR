$(document).ready(function () {
let msg = prompt("NAAM bol >> (Name) :");
if (msg == null && msg == "") {
  let msg = prompt("NAAM bol >> (Name) :");
}else{
  // `<i class="fa-solid fa-face-smile-wink emoj1"></i>`
  $(".msg p").html(`<span class="name">${msg}</span>` +  "  BUDDY..!" + "<br>" +" 26 MAIN TO DUNIYA KHATAM HAI..!! " );
  // $(".msg p").append(`<br><i class="fa-solid fa-face-smile-wink emoj1"></i>`);
}
    $(document).mousemove(function (e) {
    $('.cursor').css({
      left: e.clientX + 'px',
      top: e.clientY + 'px'
    });
  });

  // Modal button click handler
  // $(".modal-btn").click();
// Text Writiing 
  let texts = ["Shine On!", "Cheers Up!", "New Vibes!", "Happy New Year!","2026"];
  let count = 0;
  let backc = 0;
  let index = 0;

  function type() {
    let world = texts[index];
    if (count < world.length) {
      let tx = $(".text-effect .text").text();
      if (world[count] === " ")
        $(".text-effect .text").append(`<span class="typing-text">&nbsp;</span>`);
      else
        $(".text-effect .text").append(`<span class="typing-text">${world[count]}</span>`);

      $(".text-effect .text span:not(:last-child)").removeClass("typing-text");
      tx = tx + world[count];
      backc = count++;
      if (count === world.length) {
        stop();
        setTimeout(() => {
          $(".text-effect .text span").removeClass("typing-text");
        }, 220);
        setTimeout(start, 1000);
        $(".cursor1").addClass("cursor-blink");
      }

    } else {

      let tx = $(".text-effect .text").text();
      $(".text-effect .text").text(tx.slice(0, -1));
      backc--;
      if (backc < 0) {
        index++;
        count = 0;
        if (index == texts.length) {
          index = 0;
        }
      }
    }
  }

  let inter;
  function start() {
    inter = setInterval(type, 120);
    $(".cursor1").removeClass("cursor-blink");

  }
  start();

  function stop() {
    clearInterval(inter);
  }


});