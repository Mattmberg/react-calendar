import Header from "./Header";
import Footer from "./Footer";
import Calendar from "./Calendar";
import CalendarState from "../context/CalendarContext";
import Form from "./Form";

function Container() {
  
  return (
    <div className="container">
      <CalendarState>
        <Header />
        <Calendar />
        <Form/>
        <Footer/>
      </CalendarState>
    </div>
  );
}

export default Container;