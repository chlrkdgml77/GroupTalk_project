import React, {useState} from 'react'
import "./index.css"
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Exp from './components/exp/Exp'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Service from './components/service/Service'
import Testimonials from './components/testimonials/Testimonials'
import Expenses from './components/Expenses/Expenses'
import InputExpense from './components/InputExpense/InputExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: '합정 모임',
    amount: 6,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: '왕십리 모임', amount: 4, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: '오목교 모임',
    amount: 7,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: '홍대 모임',
    amount: 5,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: '목동 모임',
    amount: 5,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e6',
    title: '강남 모임',
    amount: 5,
    date: new Date(2022, 7, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpense = (expense) => {
    setExpenses((prevExpenses => {
      return [expense, ...prevExpenses]
    }));
  }

  return (

    <React.Fragment>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Exp></Exp>
      <InputExpense onAddExpense={addExpense}></InputExpense>
      <Expenses item={expenses}></Expenses>
      <Service></Service>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default App