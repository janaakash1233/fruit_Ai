import axios from "axios";
import React, { useState, useEffect } from "react";

function FaqPage() {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [author, setAuthor] = useState("");
  const [catgory, setCatgory] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [editingFaqId, setEditingFaqId] = useState(null); 
  const [editQuestion, setEditQuestion] = useState("");
  const [editAnswer, setEditAnswer] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editCategory, setEditCategory] = useState("");

  useEffect(() => {
    axios.get("https://fruit-ai-2-o7fl.onrender.com/faqs")
      .then(response => {
        setFaqs(response.data);
      })
      .catch(error => {
        console.error("Error fetching FAQs:", error);
      });
  }, []);

  const addFaq = () => {
    const newFaq = { question, answer, author, category: catgory };
    setFaqs([...faqs, newFaq]);

    const data = { question, answer, category: catgory, author };

    axios.post("https://fruit-ai-2-o7fl.onrender.com/faqs", data)
      .then(() => {
        alert("Successfully added");
        refreshFaqs();
      })
      .catch((err) => {
        console.error("Error adding FAQ:", err);
      });

    clearForm();
  };

  const editFaq = (id) => {
    const faq = faqs.find((faq) => faq._id === id);
    setEditingFaqId(id);
    setEditQuestion(faq.question);
    setEditAnswer(faq.answer);
    setEditAuthor(faq.author);
    setEditCategory(faq.category);
    setIsFormVisible(true);
  };

  const updateFaq = () => {
    const updatedFaq = { question: editQuestion, answer: editAnswer, author: editAuthor, category: editCategory };

    axios.put(`https://fruit-ai-2-o7fl.onrender.com/faqs/${editingFaqId}`, updatedFaq)
      .then(() => {
        alert("Successfully updated");
        refreshFaqs();
        clearForm();
      })
      .catch((err) => {
        console.error("Error updating FAQ:", err);
      });
  };

  const deleteFaq = (id) => {
    axios.delete(`https://fruit-ai-2-o7fl.onrender.com/faqs/${id}`)
      .then(() => {
        const newFaqs = faqs.filter((faq) => faq._id != id);
        setFaqs(newFaqs);
        console.log(id);
      })
      .catch((err) => {
        console.error("Error deleting FAQ:", err);
      });
  };

  const clearForm = () => {
    setQuestion("");
    setAnswer("");
    setAuthor("");
    setCatgory("");
    setEditQuestion("");
    setEditAnswer("");
    setEditAuthor("");
    setEditCategory("");
    setIsFormVisible(false);
    setEditingFaqId(null);
    setIsSubmitted(false);
  };

  const refreshFaqs = () => {
    axios.get("https://fruit-ai-2-o7fl.onrender.com/faqs")
      .then(response => {
        setFaqs(response.data);
      })
      .catch(error => {
        console.error("Error fetching FAQs:", error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-gradient-to-tr from-cyan-200 to-purple-100 w-full max-w-md h-auto shadow-xl rounded-2xl p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">
          FAQ Section
        </h1>
        {!isFormVisible && !isSubmitted && (
          <div className="text-center mb-4">
            <button
              onClick={() => setIsFormVisible(true)}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Add FAQ
            </button>
          </div>
        )}
        {isFormVisible && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter question"
              value={editingFaqId ? editQuestion : question}
              onChange={(e) => editingFaqId ? setEditQuestion(e.target.value) : setQuestion(e.target.value)}
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Enter answer"
              value={editingFaqId ? editAnswer : answer}
              onChange={(e) => editingFaqId ? setEditAnswer(e.target.value) : setAnswer(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
            <input
              type="text"
              placeholder="Enter author"
              value={editingFaqId ? editAuthor : author}
              onChange={(e) => editingFaqId ? setEditAuthor(e.target.value) : setAuthor(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
              type="text"
              placeholder="Enter category"
              value={editingFaqId ? editCategory : catgory}
              onChange={(e) => editingFaqId ? setEditCategory(e.target.value) : setCatgory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            <div className="text-center mt-4">
              <button
                onClick={editingFaqId ? updateFaq : addFaq}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                {editingFaqId ? "Update FAQ" : "Add FAQ"}
              </button>
              <button
                onClick={clearForm}
                className="ml-2 bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        <div className="mt-6">
          {faqs.map((faq) => (
            <div
              key={faq._id}
              className="mb-4 p-4 bg-gradient-to-b from-pink-200 to-cyan-100 border rounded-3xl shadow-sm"
            >
              <h2 className="text-lg md:text-xl font-bold text-pink-900">
                {faq.question}
              </h2>
              <p className="text-blue-500 font-bold">{faq.answer}</p>
              <p className="text-cyan-400 font-bold">Author: {faq.author}</p>
              <p className="text-sky-400 font-bold">Category: {faq.category}</p>
              <div className="mt-2">
                <button
                  onClick={() => editFaq(faq._id)}
                  className="bg-cyan-400 text-white p-2 rounded hover:bg-cyan-500 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteFaq(faq._id)}
                  className="bg-red-400 text-white p-2 rounded hover:bg-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
