const getData = async () => {
  const response = await fetch(
    `https://ecom-test-2209b-default-rtdb.firebaseio.com/category.json`
  );
  const data = await response.json();
  console.log(data);
};
getData();

// hiển thị danh sách danh mục và sản phẩm lên UI ( gợi ý , dùng map để render ra html , dùng innerHTML để gán html vào thẻ, dùng querySelector để lấy thẻ)
