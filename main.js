$(function () {
    $('[data-toggle="popover"]').popover()
  })


  function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  function openParticipantNav() {
    document.getElementById("myParticipantNav").style.width = "300px";
    document.getElementById("main").style.marginLeft= "0";
  }
  function closeParticipantNav() {
    document.getElementById("myParticipantNav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


  // function joinParticipant() {
  //   document.getElementById("joinParticipant").innerHTML = "big-div";
  //   document.getElementById("main").style.marginLeft= "0";
  // }


  document.getElementById("myBtn").onclick = function () {
    location.href = "http://127.0.0.1:5500/Zoom-Redesign-Project/joinbreakout.html#";
};