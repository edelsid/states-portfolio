import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const ProjectList = (props) => {
   return (
   <ResponsiveMasonry
      columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
      <Masonry className="portfolioItems" gutter="10px">
         {props.items.map(function(item) {
            return (
            <img key={item.id} className="work" src={item.img}></img>
            )
         })}
      </Masonry>
   </ResponsiveMasonry>
   )
}