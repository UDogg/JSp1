import pro1 from "../assets/linux.png"
import pro2 from "../assets/front-end.png"
import pro3 from "../assets/java221.png"
//local api for the dynamic project cards.
const ProjectCardData = [
    {
        imgsrc: pro1,
        title:"JBOD Manipulation using C.",
        text:"Write a program in C to iterate through a 1MB JBOD split into disks and blocks and copy the data into a user provided buffer."
        ,view: "https://github.com/UDogg/CMPSC311/blob/main/README.pdf"
        ,source: "https://github.com/UDogg/CMPSC311"    
    },
    {
        imgsrc: pro2,
        title:"Whack-A-Mole",
        text:"Write a program in Python to create a basic Whack-A-Mole game including GUI using pip and pygame packages."
        ,view: "https://github.com/UDogg/Whack-A-Mole#readme"
        ,source: "https://github.com/UDogg/Whack-A-Mole"    
    },
    {
        imgsrc: pro3,
        title:"Creating a basix JavaScript program",
        text:"Write a program in JavaScript  to perform basic functions like adding 2 numbers and converting rgb to hsv etc."
        ,view: "https://github.com/UDogg/myfirstJScode#readme"
        ,source: "https://github.com/UDogg/myfirstJScode"    
    },
];
export default ProjectCardData;
