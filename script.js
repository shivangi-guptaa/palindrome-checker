const input= document.getElementById("input");
const factBox = document.getElementById("fact");


const facts = [
  "The longest single-word palindrome in English is 'tattarrattat'.",
  "Palindrome comes from Greek — 'palin' (again) + 'dromos' (way).",
  "'Malayalam' is a language and a palindrome!",
];



function  reverseString(str)
{
     return str.split("").reverse().join("");


}

function check(){
    const value =input.value;
    // alert(value); 

    const rev=reverseString(value);
   
  if(value===rev)
  {
    alert("It is a palindrome!");
    let fact = facts[Math.floor(Math.random() * facts.length)];
    factBox.innerText = "💡 Fun Fact: " + fact;

  }
else
alert("Oops! Not a palindrome.");

}

function resetFields()
{
    input.value="";
    factBox=innerText="";
}



   