import { Toolbar } from './Toolbar/Toolbar';
import { ProjectList } from './ProjectList/ProjectList';
import { useState } from 'react';

const projects = [{
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
   category: "Business Cards",
   id: 1
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
   category: "Websites",
   id: 2
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
   category: "Websites",
   id: 3
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
   category: "Websites",
   id: 4
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
   category: "Business Cards",
   id: 5
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
   category: "Websites",
   id: 6
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
   category: "Websites",
   id: 7
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
   category: "Business Cards",
   id: 8
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
   category: "Websites",
   id: 9
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
   category: "Flayers",
   id: 10
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
   category: "Websites",
   id: 11
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
   category: "Business Cards",
   id: 12
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
   category: "Websites",
   id: 13
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
   category: "Websites",
   id: 14
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
   category: "Business Cards",
   id: 15
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
   category: "Websites",
   id: 16
 }, {
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
   category: "Flayers",
   id: 17
 }];

 const filters = [{
  name: "All",
  id: 1
 },
 {
  name: "Websites",
  id: 2
 },
 {
  name: "Flayers",
  id: 3
 },
 {
  name: "Business Cards",
  id: 4
 }]

 export const Portfolio = () => {
   let selected = "All";
   const initialState = projects;
   const [items, setItems] = useState(initialState);

   const filterItems = (filter) => {
    let newProjects;
    selected = filter;
    if (selected === "All") {
      newProjects = projects;
    } else {
      newProjects = projects.filter((project) => project.category === selected);
    }
    setItems(newProjects);
   }

   return (
   <div className="widget">
      <Toolbar filters={filters} selected={selected} filterItems={filterItems}/>
      <ProjectList items={items}/>
   </div>
   )
}