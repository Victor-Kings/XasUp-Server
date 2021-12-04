import React, { useContext, useState } from 'react'
import { ScrollView } from 'react-native'
import userContext from '../context/userContext';

import ConversationItem from './ConversationItem';

const Conversations = ({ children }) => {
	const {listFriends , listGroups} = useContext(userContext);
	return (
		<ScrollView>
			{children}
			 {
				listFriends?.map((element)=>
					<ConversationItem
						key={`${element.id}_name`}
						username={element.name}
						id={element.id}	
					/>
				
				)
			}
			{
				listGroups?.map((element)=>
					<ConversationItem
						key={`${element.groupnameid}_GROUP`}
						username={element.groupname}
						isGroup={true}
						id={`${element.groupnameid}_GROUP`}
					/>
				)
			}
		</ScrollView>
	)
}

export default Conversations
