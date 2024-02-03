import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [customers, setCustomers] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/customers/active",
        { withCredentials: true }
      );
      console.log(response.data);
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching active customers:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mt-8 mx-auto w-3/4">
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Address</th>
            <th className="py-2 px-4 text-left">Accounts</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <React.Fragment key={customer._id}>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4">{customer.name}</td>
                <td className="py-2 px-4">{customer.address}</td>
                <td className="py-2 px-4">{customer.accounts[0]}</td>
              </tr>
              {customer.accounts.slice(1).map((account, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4">{account}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
