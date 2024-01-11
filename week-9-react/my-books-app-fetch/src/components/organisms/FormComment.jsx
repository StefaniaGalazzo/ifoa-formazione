/* eslint-disable react/prop-types */
import { HiOutlineTrash } from "react-icons/hi2";

export default function FormComment({ comments, setClickedCardIndex }) {
  const deleteData = async (bookId) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE",
          },
        }
      );
      if (res.ok) {
        console.log("ok");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
    setClickedCardIndex(null);
  };

  return (
    <ul id="commentsSection">
      {comments?.length > 0 ? (
        comments.map((mess, indx) => (
          <li
            key={indx}
            className="p-2 border rounded mb-2 d-flex justify-content-between"
          >
            {mess.comment}
            <HiOutlineTrash
              color="orange"
              size="22px"
              onClick={() => deleteData(mess._id)}
            />
          </li>
        ))
      ) : (
        <p>There are no comments!</p>
      )}
    </ul>
  );
}
