import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [customers, setCustomers] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const fetchActiveUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/customers/active",
        { withCredentials: true }
      );
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching active customers:", error);
    }
  };

  const handleAccountClick = async (account) => {
    setSelectedAccount(account);
    try {
      console.log(account);
      const response = await axios.get(
        `http://localhost:3000/api/transactions/${account}`,
        { withCredentials: true }
      );

      const sortedTransactions = response.data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
      setTransactions(sortedTransactions);
      console.log("response.data", response);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };
  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  useEffect(() => {
    fetchActiveUsers();
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
                <td className="py-2 px-4">
                  {customer.accounts.map((account) => (
                    <div
                      key={account}
                      className={`cursor-pointer ${
                        selectedAccount === account
                          ? "text-blue-500 font-bold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleAccountClick(account)}
                    >
                      {account}
                    </div>
                  ))}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {selectedAccount && (
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">
            Transactions for Account ID: {selectedAccount}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2 text-center">Date</th>
                  <th className="border px-4 py-2 text-center">Amount</th>
                  <th className="border px-4 py-2 text-center">
                    Transaction Code
                  </th>
                  <th className="border px-4 py-2 text-center">Symbol</th>
                  <th className="border px-4 py-2 text-center">Price</th>
                  <th className="border px-4 py-2 text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction._id}>
                    <td className="border px-4 py-2 text-center">
                      {formatDateString(transaction.date)}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {transaction.amount}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {transaction.transaction_code}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {transaction.symbol}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {transaction.price.toFixed(2)}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {transaction.total.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
