var questions = ["What is the largest city in Kazakhstan?", 
               "What is the official language of Kazakhstan?",
               "What is the name of the world's first and largest space launching facility located in Kazakhstan?",
               "Which of the following is a famous Kazakh dish made with horse meat?",
               "Which river forms part of Kazakhstan's border with China?",
               "Which Kazakh city was renamed Nur-Sultan in honor of the country's first president?",
               "What is the currency of Kazakhstan?",
               "Which mountain range runs through southeastern Kazakhstan?",
               "What is the name of the famous Kazakh singer and composer who performed at the 2019 Shanghai Cooperation Organization Summit in Kyrgyzstan?"];
var answers = ["Almaty", "Kazakh", "Baikonur Cosmodrome", "Beshbarmak", "Ili River", "Astana", "Tenge", "Tien Shan", "Dimash Kudaibergen"];

var choice_options = [["Astana", "Almaty", "Shymkent", "Karaganda"],
                      ["Kazakh", "Russian", "Turkish", "Uzbek"],
                      ["Baikonur Cosmodrome", "Soyuz Launch Facility", "Sputnik Space Center", "Vostok Launch Site"],
                      ["Beshbarmak", "Plov", "Lagman", "Shashlyk"],
                      ["Ural River", "Ili River", "Syr Darya River", "Ishim River"],
                      ["Almaty", "Shymkent", "Karaganda", "Astana"],
                      ["Ruble", "Tenge", "Dollar", "Euro"],
                      ["Himalayas", "Tien Shan", "Andes", "Rocky Mountains"],
                      ["Dimash Kudaibergen", "Kairat Nurtas", "Batyrkhan Shukenov", "Alibek Datbayev"]];

$(document).ready(function(){
//     correct = ["2009", "name", "code", "js"];
//     questions = ["Which year Nazarbayev University was founded?","Which year Nazarbayev University was founded?"]
//     choice_options = [["2009","2010","2011","2012"],["2009","2010","2011","2012"]]
    
    // Generate quiz questions
    // ...
    
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery
    for (let i = 0; i < questions.length; i++) {
          let questionDiv = $("<div class='question'>");
          quizBox.append(questionDiv); 
          var num = i + 1;
          questionDiv.append ("<p class='d'> " + "Q" + num  +". "+ questions[i] + " </p>");
          for (let j = 0; j < 4; j++) {
               questionDiv.append ("<label><input type='radio' name='q"+ num +"' value='a'>" + choice_options[i][j]+ "</label>")
          }
     }
    
    countCorrect = 0;
    reset = false;  
    
//     $("button").click (function (event){
//          $("input[name=q1]").each (function (index){
//                 choice = $(this).parent().text(); 
//                 if ($( this ).prop("checked") == true && answers [0] == choice){
//                      countCorrect += 1;
//                 }
//          });
//     $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
//     }); 
$("button").click(function(event) {
     countCorrect = 0;
     for (let i = 0; i < questions.length; i++) {
       let selected = false;
       let choice = "";
       $(`input[name=q${i+1}]`).each(function(index) {
         if ($(this).prop("checked")) {
           selected = true;
           choice = $(this).parent().text().trim();
         }
       });
       if (selected && choice === answers[i]) {
         countCorrect += 1;
       }
     }
     $("#quiz-box").append("<h2>Result of the quiz is: " + countCorrect + "</h2>");
   });

});