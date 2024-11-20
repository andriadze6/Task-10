
import {useTranslations} from 'next-intl';
import NewHeader from './components/Header/NewHeader';
import NewHomePage from './components/HomePage/NewHomePage'
import {supabase} from './lib/supabaseClient'
import {HomePageDataContext} from './providers/HomePageDataProvider'
import '@/app/globals.css'

async function getData() {
  try {
    const { data: get_home_page_data, error } = await supabase
      .rpc('get_home_page_data'); // Use .rpc() for calling functions

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }
    console.log(get_home_page_data);
    return get_home_page_data;
  } catch (err) {
    console.error('Unexpected error:', err);
    return null;
  }
}

export default async function HomePage() {
  const homePageData = await getData();
  return (
    <>
      <NewHeader></NewHeader>
      <HomePageDataContext.Provider value={{homePageData}}>
        <NewHomePage></NewHomePage>
      </HomePageDataContext.Provider>
      {/* <Header></Header>
      <HomePageComponents></HomePageComponents> */}
    </>
  );
}
