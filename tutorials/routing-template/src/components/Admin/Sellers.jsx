import React, { useEffect, useState } from "react";
import apiClient from "../../utils/api-client";
import Loader from "../Common/Loader";

const Sellers = () => {
  const [name, setName] = useState("");
  const [sellers, setSellers] = useState([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // fetchSellers();
    setIsLoading(true);
    setErrors("");
    apiClient
      .get("/users")
      .then((res) => {
        setSellers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrors(err.message);
        console.log(err);
      });
  }, []);

  //   const fetchSellers = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await apiClient.get("/users");
  //       setSellers(res.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setErrors(error.message);
  //       setIsLoading(false);
  //     }
  //   };
  const addSeller = () => {
    console.log(name);
    const newSeller = {
      name,
      id: sellers.length + 1,
    };
    setSellers([newSeller, ...sellers]);
    apiClient
      .post("/users", newSeller)
      .then((res) => setSellers([res.data, ...sellers]))
      .catch((err) => {
        setErrors(err.message);
        setSellers(sellers);
      });
  };

  const handleDeleteSeller = (seller) => {
    setSellers(sellers.filter((s) => s.id !== seller.id));
    apiClient
      .delete(`/users/${seller.id}`)
      .then((res) => console.log(res))
      .catch((err) => {
        setErrors(err.message);
        setSellers(sellers);
      });
  };

  const handleUpdateSeller = (seller) => {
    const updateName = seller.name + " Updated";
    setIsLoading(true);
    apiClient
      .patch(`/users/${seller.id}`)
      .then((res) => {
        if (res.status === 200) {
          const index = sellers.findIndex((obj) => obj.id === seller.id);
          if (index !== -1) {
            sellers[index] = { ...sellers[index], name: updateName };
          }
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setSellers(sellers);
        setErrors(err.message);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h3>Admin Sellers Page</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={addSeller}>Add Seller</button>
      {isLoading && <Loader />}
      {errors && (
        <div>
          <em>{errors}</em>
        </div>
      )}
      <table>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.id}>
              <td>{seller.name}</td>
              <td>
                <button onClick={() => handleUpdateSeller(seller)}>
                  Update
                </button>
              </td>
              <td>
                <button onClick={() => handleDeleteSeller(seller)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sellers;
