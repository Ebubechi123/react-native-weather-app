import { StyleSheet,} from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/layout'
import { SearchBar } from '../../components/SearchBar/searchBar'
import PreviousResults from '../../components/PreviousResult'
import SearchSecondHalf from '../../components/searchSecondHalf'
import Header from '../../components/Header'



const SearchScreen = () => {
  return (
   <Layout>
    {/* <SearchHeader/> */}
    <Header title={'Search for city'} backbtn={false} />
    <SearchBar/>
    <PreviousResults/>
    <SearchSecondHalf/>
   </Layout>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})