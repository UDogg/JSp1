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
        title:"JBOD Manipulation using C.",
        text:"Write a program in C to iterate through a 1MB JBOD split into disks and blocks and copy the data into a user provided buffer."
        ,view: "https://github.com/UDogg/CMPSC311/blob/main/README.pdf"
        ,source: "https://github.com/UDogg/CMPSC311"    
    },
    {
        imgsrc: pro3,
        title:"JBOD Manipulation using C.",
        text:"Write a program in C to iterate through a 1MB JBOD split into disks and blocks and copy the data into a user provided buffer."
        ,view: "https://github.com/UDogg/myfirstJScode#readme"
        ,source: "https://github.com/UDogg/myfirstJScode"    
    },
];
export default ProjectCardData;