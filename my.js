const triangle = document.getElementById('triangle-button').addEventListener('click',function(){
    const triangleArea = document.getElementById('triangle-title').innerText;
    const triangleB = document.getElementById('triangle-b-input').value;
    const triangleH = document.getElementById('triangle-h-input').value;
    const totalArea =parseFloat(triangleB) * parseFloat(triangleH);

    if(triangleB == " " || triangleH == " "){
        alert("please enter valid number");
    }


calCulaTion(triangleArea,triangleB,triangleH,totalArea);
})

function calCulaTion(triangleArea,triangleB,triangleH,totalArea){
const tableContainer = document.getElementById('tableData');
const tablerow = document.createElement("tr");
tablerow.innerHTML = `
 <td>${triangleArea}</td>
 <td>${triangleB}</td>
 <td>${triangleH}</td>
 <td>${totalArea}</td>
`
tableContainer.appendChild(tablerow);
};