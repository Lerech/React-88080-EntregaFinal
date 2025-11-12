import { useState } from "react";


function CheckoutForm({ handleCheckout }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleCheckout(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Dirección"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <button type="submit">Finalizar compra</button>
    </form>
  );
}

export default CheckoutForm;
