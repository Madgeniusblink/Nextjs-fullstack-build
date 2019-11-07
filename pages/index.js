import Layout from '../components/Layout'
import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import { gql } from "apollo-boost";
import HabitList from '../components/HabitList'
import HabitForm from '../components/HabitForm'

export const testQuery = gql`
  {
    habits {
      _id
      name
    }
  }
`

const Home = () => {
  const { loading, data } = useQuery(testQuery)


  if (loading) return <h1>Loading...</h1>;
  return (
  <Layout>
    <div className='hero'>
      <h1 className='title'>Habit Tracker</h1>
      <div className="list">
        <HabitForm />
        <HabitList />
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .list {
        max-width: 600px;
        margin: 0 auto;
      }
    `}</style>
  </Layout>
)}

export default withApollo(Home)
