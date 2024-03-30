import "./FlowerDelivery.css";
function FlowerDelivery() {
  return (
    <div>
      <h1 id={"flowerPageHeader"} className={"mb-3"}>
        Order Flowers For A Loved One
      </h1>
      <form>
        <div className="form-group">
          <label htmlFor="senderName">Sender's Name:</label>
          <input
            type="text"
            id="senderName"
            name="senderName"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="receiverName">Receiver's Name:</label>
          <input
            type="text"
            id="receiverName"
            name="receiverName"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomNum">Room Number:</label>
          <input
            type="text"
            id="roomNum"
            name="roomNum"
            className="form-control"
          />
        </div>
        <div className="form-group mx-3">
          <div className={"row"}>
            <label>Flower Type</label>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="radio"
                name="flowerType"
                value="Rose"
              />
              <label className="form-check-label">Rose</label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="radio"
                name="flowerType"
                value="Tulip"
              />
              <label className="form-check-label">Tulip</label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="radio"
                name="flowerType"
                value="Lily"
              />
              <label className="form-check-label">Lily</label>
            </div>
          </div>
          {/* Add more flower types as needed */}
          <button type="submit" className="btn submit-btn px-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FlowerDelivery;
