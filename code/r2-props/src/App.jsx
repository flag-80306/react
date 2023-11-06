import Card from "./components/Card"
import FruitList from "./components/FruitList4"

const data = [
  {
    name: "Helder",
    imageURL: "https://thumbs.web.sapo.io/?W=1550&H=0&delay_optim=1&webp=1&epic=NGE5/RUg7Xk85ldCQ0nI/UrvVbitWynhpAzdTXgg3IcrlLbesosh+zxlwTsMksjXYfdWZqOdaFbdisF8xky/V4cVjbdjJf0ecP+LxIg4xyRGFjc="
  },
  {
    name: "Ricardo",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Homer_British_Museum.jpg"
  },
  {
    name: "Diogo",
    imageURL: "https://thumbs.web.sapo.io/?W=1550&H=0&delay_optim=1&webp=1&epic=NGE5/RUg7Xk85ldCQ0nI/UrvVbitWynhpAzdTXgg3IcrlLbesosh+zxlwTsMksjXYfdWZqOdaFbdisF8xky/V4cVjbdjJf0ecP+LxIg4xyRGFjc="
  }
]

function App() {

  return (
    <>
      <FruitList />
      <h1>Hello</h1>
      <Card name={data[0].name} imageURL={data[0].imageURL} />
      <Card name={data[1].name} imageURL={data[1].imageURL} />
      <Card name={data[2].name} imageURL={data[2].imageURL} />
      {
        data.map((item, index) => {
          return <Card key={index} name={item.name} imageURL={item.imageURL} />
        })
      }
    </>
  )
}

export default App
