let randomaudio = document.getElementById('musicc')
let song2 = document.getElementById('musicc2')
function songplay(){
randomaudio.play()
song2.pause()
document.getElementById('ment1').style.display = "none"
document.getElementById('ment2').style.display = "block"
document.getElementById('ment3').style.display = "block"
document.getElementById('ment4').style.display = "none"
//document.getElementById('circ1').style.display = "none"
//document.getElementById('circ2').style.display = "none"
//document.getElementById('circ3').style.display = "none"
//document.getElementById('circ4').style.display = "none"
//document.getElementById('line').style.display = "none"

}
function song2play(){
randomaudio.pause()
song2.play()
document.getElementById('ment5').style.display = "block"
document.getElementById('ment2').style.display = "none"
document.getElementById('ment3').style.display = "none"
document.getElementById('ment4').style.display = "block"


}
