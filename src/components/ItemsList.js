const ItemsList = ({ items }) => {
  console.log(items);

  return (
    <div className="font-serif">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2 border-b-2 border-orange-600 text-start"
        >
          <div>
            <span className="font-semibold text-base">
              {item?.card?.info?.name}
            </span>
            <br />
            <span className="font-semibold flex items-center justify-start text-base">
              Rs.
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>
          </div>
          <div>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
