import { createStackNavigator } from '@react-navigation/stack';
import CourseList from '../components/CourseList';
import CourseDetails from '../(pages)/CourseDetails';
import CourseInformation from '../components/CourseInformation';
import CourseContent from '../components/CourseContent';
import CourseChapter from '../(pages)/CourseChapter';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="CourseList" >
      <Stack.Screen name="CourseList" component={CourseList} ></Stack.Screen>
      <Stack.Screen name="CourseDetails" component={CourseDetails} ></Stack.Screen>
      <Stack.Screen name='CourseChapter' component={CourseChapter}></Stack.Screen>
    </Stack.Navigator>
  );
}
export default AppNavigator;
