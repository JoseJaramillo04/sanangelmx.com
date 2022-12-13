import * as React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { productInfoType } from "../assets/types";

interface Props {
  items: productInfoType[];
  placeholder: string;
}

const ProductList: React.FunctionComponent<Props> = ({
  items,
  placeholder,
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <>
      <div className="search-bar-row">
        <div>
          <span className="red">{items.length + " "}</span>
          <span>results</span>
        </div>
        <div className="search-container">
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input
            className="search-field"
            type="text"
            placeholder={"Search " + placeholder}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="category-content">
        <table>
          <tbody>
            {items
              .filter((item: productInfoType) => {
                if (searchTerm === "") return item;
                else if (
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                  return item;
                else return null;
              })
              .map((item: productInfoType) => (
                <tr key={"row" + item.id}>
                  <td className="tr-name">{item.name}</td>
                  <td className="tr-time">
                    last modified: {item.modifiedTime}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
