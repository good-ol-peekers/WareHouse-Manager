const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

function drawPackages(array){
    let packageElement = document.getElementById('packages')
    let allPackages = ''

    array.forEach(package => {
        allPackages += `<div title="${package.priorityLevel}"> 📦 TRACKING #:${package.trackingNumber}   --NAME:${package.to}</div>`
    });
packageElement.innerHTML = allPackages

        
}


function drawByPriorityLevel(){
    const importantPackages = packages.filter(package => package.priorityLevel == 'express')
    drawPackages(importantPackages)
    console.log(importantPackages)
}


function drawShipPackage(){
    let shipping = window.prompt("what package would you like to send?")
    const packageShipped = packages.findIndex(package += shipping )
    if (packageShipped == shipping) {
        console.log("bye bye")
    } else {
        
    }
}
drawByPriorityLevel()
drawShipPackage()
drawPackages(packages)


















// let priorityPackages = packages.find(packages.priorityLevel)
//     if (priorityPackages == 'express') {
//         function drawFirstToShip(){
//             return
//         }
//     }
// }
// if (condition) {
    
// }





// // LOOP THRU ARRAY

// packages.forEach(package => {
//     console.log(package)
// });

// // FUNCTIONS
// function drawImportance(){
//     let template = ''
//     packages.forEach(package => {if (package.priorityLevel == "express") {
//     template += `<span>${package.trackingNumber}</span>`
// }})
//     console.log(template)
// }
// drawImportance()