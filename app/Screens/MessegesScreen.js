import React, { useState } from 'react'
import { FlatList } from 'react-native'

import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

const inicialMesseges = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/profilePic.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/profilePic.jpg'),
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('../assets/profilePic.jpg'),
  },
]

function MessegesScreen(props) {
  const [messeges, setMesseges] = useState(inicialMesseges)
  const [
    refreshing,
    // setRefreshing
  ] = useState(false)

  const handlerDelete = messege => {
    const newMesseges = messeges.filter(element => element.id !== messege.id)
    setMesseges(newMesseges)
  }

  return (
    <Screen>
      <FlatList
        data={messeges}
        keyExtractor={element => element.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handlerDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMesseges([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/profilePic.jpg'),
            },
          ])
        }}
      />
    </Screen>
  )
}

export default MessegesScreen
