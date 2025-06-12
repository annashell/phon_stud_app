/*
NB! Не удаляйте этот комментарий.
Тест создан программой TestMaker VVZ 2.6
автор: Валентина Захаркина
author: Valentina Zakharkina
E-mail: vvz@icape.nw.ru
http://vvz.nw.ru
*/

ans0 = new Array('001','010','100','100','010','0100','001','100');
ball = new Array(1,1,1,1,1,1,1,1);
testName = 'testg9';
showCorrWrong = true;
maxAttempts = 2;
startDoc = testName;
testDoc = testName+'1';

imgYes = new Image;
imgNo = new Image;
imgYes.src = 'yes.gif';
imgNo.src = 'no.gif';

regname='';
score=0;
score0=0;
attempt=0;

// ______________________ для оценки результатов:

  resultEstimation = new Array('Замечательный результат!','Это хороший результат.','Вполне прилично.','Неплохо, но можно лучше.','Результат не очень хороший.','Наверное, Вы были невнимательны. Слишком много ошибок.');
  
  resultPercent = new Array(1,0.85,0.75,0.65,0.55,0);    

//_____________________________________________________________________


function init()
{
  with (document.test)
  {
    for ( i=0; i<document.test.elements.length; i++)
    {
       elements[i].checked = false;
    };
  };

  document.res.mark.value = '';
  
  nmbrOfQuestions = ans0.length;
  
  ans = new Array(nmbrOfQuestions);
  ansResult = new Array(nmbrOfQuestions);
  answeredQuestions = new Array(nmbrOfQuestions);
};


//_____________________________________________________________________

function check()
{
  if ( attempt > maxAttempts ) exit;

  var imgSrc = '';
  var n = 0;
  ans[0] = '';

  with (document.test)
  {
    for ( var i=0; i<elements.length; i++ )
    {
       if ( (elements[i].type=='checkbox') || (elements[i].type=='radio') )
       {
         if ( parseInt(elements[i].value)!=n )
         {
            n = n+1;
            ans[n] = '';
         };

         if (elements[i].checked)
           { ans[n] = ans[n] + '1'; }
         else
           { ans[n] = ans[n] + '0'; }
       }
    };

    for (i=0; i<nmbrOfQuestions; i++)
    {
      if ( ans0[i]==ans[i] )
        { ansResult[i] = 1 }
      else
        { ansResult[i] = 0 };
    };

    maxScore = 0;
    score = 0;
    correctAnswers = 0;
    nmbrAnsweredQuestions = 0;
    missedQuestions = '';
    nmbrMissedQuestions = 0;

    for (i=0; i<nmbrOfQuestions; i++)
    {
      score = score + ansResult[i]*ball[i];
      maxScore = maxScore + ball[i];
      correctAnswers = correctAnswers + ansResult[i];

      if ( parseInt(ans[i])>0 )
        { answeredQuestions[i] = 1;
          nmbrAnsweredQuestions = nmbrAnsweredQuestions + 1;
          
          if (showCorrWrong)
          {
            if ( ansResult[i]==1 )
             { imgSrc = 'yes' }
            else
             { imgSrc = 'no' };
         
            var j = i+1;     
            eval('document.a'+j+'.src="'+imgSrc+'.gif"');
          }
        }
      else
        { answeredQuestions[i] = 0;
          missedQuestions = missedQuestions + ' ' + (i+1);
          nmbrMissedQuestions = nmbrMissedQuestions + 1;
        };
    };
   };   
};


//_____________________________________________________________________


function showResult()
{

  //---------------------------- endings 
  
  function ending1(nmbr)  // окончания для слов "вопрос" и "балл"
  {
   var ending;
   var a;
   
   if ( nmbr == Math.floor(nmbr) )
   {  
     if ( (nmbr>=10) && (nmbr<=19) )  
     { ending='ов'
     }
     else
     { a = nmbr%10;
  
       if (a==1) { ending='' }
       else 
       { if ((a==2)||(a==3)||(a==4))  { ending='а' }
         else                         { ending='ов' }
       };
     };
   }
   else {ending='а'};

   return (ending);  
  };
  
  function ending2(nmbr)  // окончания для слова "возможн..."
  {
   var ending;
   var a;
  
   ending = 'ых';
   a = nmbr%10;

   if ( (nmbr==Math.floor(nmbr)) && (a==1) )
   {  ending = 'ого'
   };

   return (ending);  
  };  

  //---------------------------------------   
  
  attempt = attempt + 1;
  var s=''; 

  if ( attempt <= maxAttempts )
  {  
    if ( attempt>1 )
    {  s = s + attempt + ' попытка.\n\n';
    }
  }
  else
  {
    s = s + 'Попытки ответов на вопросы исчерпаны.\n\n';
  };
  
  s = s + 'По результатам ответов на '+nmbrAnsweredQuestions+' вопрос'+ending1(nmbrAnsweredQuestions)+' из '+nmbrOfQuestions+ 
      ' Вы получили '+score+' балл'+ending1(score)+' из '+ maxScore+' возможн'+ending2(maxScore)+'.\n';
      
  rate = '';

  if ( attempt==1 )
  {
    if (score==maxScore) {rate=resultEstimation[0]}
    else
     { for (i=1; i<resultEstimation.length; i++)
       { if ((score<(maxScore*resultPercent[i-1])) && (score>=(maxScore*resultPercent[i]))) 
         {  rate=resultEstimation[i];
            break
         }
       }
     }
   };  
   
   s = s + rate;
  
  if ( attempt>1 )
  {  s = s + '\nРезультат предыдущей попытки: '+score0+' балл'+ending1(score0);
  };
  
  document.res.mark.value = s;

  score0 = score;
  
  cookStr = 'test=regname='+regname+':score='+score;
  document.cookie = cookStr;
};

//_____________________________________________________________________


function result()
{
  if ( nmbrMissedQuestions>0 )
  {
    var s1 = 'Вы ответили не на все вопросы (предполагается, что среди вариантов ответа на каждый вопрос есть хотя бы один правильный).\n';
    var s2;
    var s3 = '\nХотите ответить на все вопросы?';

    if (nmbrMissedQuestions==1)
       { s2 = 'Пропущенный вопрос: ' }
    else
       { s2 = 'Пропущенные вопросы: ' };

    if (!(confirm(s1+s2+missedQuestions+s3)))
    { showResult() };

 }
  else { showResult() };

};

//_____________________________________________________________________
