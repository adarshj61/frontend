const form = document.getElementById('addMaterialForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const unit = document.getElementById('unit').value;
    try {
      const res = await api.post('/materials', { name, price, unit });
      alert('Material added successfully');
      form.reset();
    } catch (err) {
      alert('Error adding material');
    }
  });
}

const materialsList = document.getElementById('materialsList');
if (materialsList) {
  api.get('/materials')
    .then(res => {
      res.data.forEach(mat => {
        const div = document.createElement('div');
        div.className = 'p-4 bg-white rounded shadow';
        div.innerHTML = `<h3 class="font-bold">${mat.name}</h3><p>Price: ₹${mat.price}/${mat.unit}</p>`;
        materialsList.appendChild(div);
      });
    });
}