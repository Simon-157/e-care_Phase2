import React, {useState} from 'react'
import { SearchBarStyled } from './styles/SearchBar.Styled'

const SearchBar =({info}) => {

    const [title, setTitle] = useState(" ")
    const [data, setData] = useState(info)
  
    const filter = (e) => {
      const searchTitle = e.target.value
  
      if(searchTitle !== " "){
  
        const results = info.filter((card) => {
          return card.title.toLowerCase().includes(searchTitle.toLowerCase());
        });
        setData(results)
  
      }else{
        setData(data);
      }
  
      setTitle(searchTitle);
    }
  
    console.log(data)
  


  return (
    <SearchBarStyled>
        <input className="search-input" type="search" name={title} onChange={filter} placeholder="Search for a registered patient" />
    </SearchBarStyled>
  )
}

export default SearchBar