import DishItem from "../DishItem";
function MenuCategory({ title, items }) {
    return (
      <section>
      {/* <h2 className="text-2xl font-semibold text-gray-700 p-2">{title}</h2> */}
      <div className="mt-4 flex flex-col gap-6">
        {items.map((category, index) => (
          <div key={index} className="flex-1 min-w-[160px]   overflow-hidden">
            <h3 className="bg-gray-300 p-3 text-xl font-medium text-start">{category.title}</h3>
            <ul className="p-2  flex gap-4 overflow-x-auto scrollbar-hide">
              {category.dishes.map((dish, idx) => (
                <DishItem key={idx} name={dish.name} details={dish.details} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    );
  }
export default MenuCategory