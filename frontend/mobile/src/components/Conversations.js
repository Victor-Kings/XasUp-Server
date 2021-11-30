import React, { useContext } from 'react'
import { ScrollView } from 'react-native'
import userContext from '../context/userContext';

import ConversationItem from './ConversationItem';

const Conversations = ({ children }) => {
	const {listFriends} = useContext(userContext);
	console.log("EPALISTPORAQUI",listFriends);
	return (
		<ScrollView>
			{children}
			{
				listFriends&&listFriends.map((element)=>
					<ConversationItem
						key={element.id}
						username={element.name}
						id={element.id}
						lastMessage="Hello there"
						notification="3"
					/>
				)
			}


		</ScrollView>
	)
}

export default Conversations