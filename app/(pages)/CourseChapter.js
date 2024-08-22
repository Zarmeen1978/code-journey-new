// import { View, Text, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
// import React, { useEffect, useState, useRef } from 'react';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import ProgressBar from '../components/ProgressBar';
// import GlobalApi from '../shared/GlobalApi';

// export default function CourseChapter() {
//     const param=useRoute().params;
//     const [course,setCourse]=useState([])
//     const navigation=useNavigation();
//     const [userProgress,setUserProgress]=useState([]);

//     const chapterRef = useRef(null);
//     useEffect(() => {
//         setCourse(param?.courseData);
//         param.courseData.id ? getCourseProgress() : null;
//     }, [param.courseContentId]);
    
//     const getCourseProgress = () => {
//         GlobalApi.getCourseList(param?.courseData.id)
//             .then(resp => {
//                 if (resp.data.data) {
//                     // Extract the necessary attributes and set them in userProgress
//                     const result = resp.data.data.map(item => ({
//                         id: item.id,
//                         courseId: item.attributes.courseId,
//                         courseContentId: item.attributes.description,
//                         examples: item.attributes.example.map(example => ({
//                             id: example.id,
//                             description: example.description,
//                             input: example.input,
//                             output: example.output,
//                         }))
//                     }));
    
//                     setUserProgress(result);
//                 }
//             });
//     };
    

//     const onClickNext = (index) => {
//         setRun(false);
//         setProgress((index + 1) / chapter.length);
//         try {
//             chapterRef.current?.scrollToIndex({ animated: true, index: index + 1 });
//         } catch (e) {
//             const data = {
//                 data: {
//                     uid: userData?.id, // Ensure userData is defined
//                     courseId: param.courseId,
//                     courseContentId: param.courseContent.id,
//                 }
//             };

//             GlobalApi.setCourseProgress(data).then(resp => {
//                 navigation.navigate({
//                     name: 'CourseDetails',
//                     params: { courseContentId: param.courseContent.id },
//                     merge: true,
//                 });
//             });
//         }
//     };

//     return (
//         <View style={{ padding: 20, paddingTop: 50, flex: 1 }}>
//             <TouchableOpacity onPress={() => navigation.goBack()}>
//                 <Ionicons name="arrow-back-sharp" size={24} color="black" />
//             </TouchableOpacity>
//             <ProgressBar progress={progress} />
//             <FlatList
//     data={chapter}
//     horizontal={true}
//     pagingEnabled
//     ref={chapterRef}
//     renderItem={({ item, index }) => (
//         <ScrollView style={{ width: Dimensions.get('screen').width * 0.85, marginRight: 15, padding: 10 }}>
//             <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.description}</Text> {/* Display description */}
//             {item.input && (
//                 <View>
//                     <View style={{ backgroundColor: 'black', padding: 20, borderRadius: 10 }}>
//                         <Text style={{ color: 'white' }}>{item.input}</Text> {/* Display input */}
//                     </View>
//                     <TouchableOpacity
//                         style={{ backgroundColor: '#0d6efd', width: 60, padding: 5, borderRadius: 5, marginTop: 10, display: 'flex', flexDirection: 'row' }}
//                         onPress={() => setRun(true)}
//                     >
//                         <Ionicons name="play-circle" size={20} color={'white'} />
//                         <Text style={{ textAlign: 'center', marginLeft: 5, color: 'white' }}>Run</Text>
//                     </TouchableOpacity>
//                 </View>
//             )}
//             {run && (
//                 <View style={{ marginTop: 15 }}>
//                     <Text style={{ fontWeight: 'bold' }}>Output</Text>
//                     <View style={{ backgroundColor: 'black', padding: 20, borderRadius: 10, marginTop: 10 }}>
//                         <Text style={{ color: 'white' }}>{item.output}</Text> {/* Display output */}
//                     </View>
//                 </View>
//             )}
//             <TouchableOpacity
//                 onPress={() => onClickNext(index)}
//                 style={{
//                     backgroundColor: index + 1 !== chapter.length ? 'lightblue' : 'green',
//                     padding: 10,
//                     borderRadius: 7,
//                     bottom: 0,
//                     width: '100%',
//                     marginTop: 89
//                 }}
//             >
//                 <Text style={{ textAlign: 'center', color: 'white' }}>{index + 1 !== chapter.length ? 'Next' : 'Finish'}</Text>
//             </TouchableOpacity>
//         </ScrollView>
//     )}
// />

//         </View>
//     );
// }


import { View, Text, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProgressBar from '../components/ProgressBar';
import GlobalApi from '../shared/GlobalApi';

export default function CourseChapter() {
    const navigation = useNavigation();
    const param = useRoute().params;
    const [chapter, setChapter] = useState([]);
    const [run, setRun] = useState(false);
    const [progress, setProgress] = useState(0);

    const chapterRef = useRef(null);

    useEffect(() => {
        setProgress(0);
        getCourseContent();
    }, []);

    const getCourseContent = async () => {
        try {
            const resp = (await GlobalApi.getCourseList()).data;
            const result = resp.data.map((item) => ({
                id: item.id,
                name: item.attributes.name,
                description: item.attributes.description,
                examples: item.attributes.example.map((example) => ({
                    text: example.text,
                    description: example.description,
                    input: example.input,
                    output: example.output,
                })),
            }));
            setChapter(result);
        } catch (error) {
            console.error("Error fetching course content:", error);
        }
    };
    
    const onClickNext = (index) => {
        setRun(false);
        setProgress((index + 1) / chapter.length);
        try {
            chapterRef.current?.scrollToIndex({ animated: true, index: index + 1 });
        } catch (e) {
            const data = {
                data: {
                  //  uid: userData?.id, // Ensure userData is defined
                    courseId: param.courseId,
                    courseContentId: param.courseContent.id,
                }
            };

            GlobalApi.setCourseProgress(data).then(resp => {
                navigation.navigate({
                    name: 'CourseDetails',
                    params: { courseContentId: param.courseContent.id },
                    merge: true,
                });
            });
        }
    };

    return (
        <ScrollView style={{ padding: 20, paddingTop: 50, flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>
            {/* <ProgressBar progress={progress} /> */}
            <FlatList
    data={chapter}
    horizontal={true}
    pagingEnabled
    ref={chapterRef}
    renderItem={({ item, index }) => (
        <ScrollView style={{ width: Dimensions.get('screen').width * 0.85, marginRight: 15, padding: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ marginBottom: 34 }}>{item.description}</Text>
            {item.examples.map((example, exampleIndex) => (
                <View key={exampleIndex}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>{example.text}</Text>
                    <Text style={{ marginBottom: 10 }}>{example.description}</Text>
                    {example.input && (
                        <View>
                            <View style={{ backgroundColor: 'black', padding: 20, borderRadius: 10 }}>
                                <Text style={{ color: 'white' }}>{example.input}</Text>
                            </View>
                            <TouchableOpacity 
                                style={{ 
                                    backgroundColor: '#0d6efd', 
                                    width: 60, 
                                    padding: 5, 
                                    borderRadius: 5, 
                                    marginTop: 10, 
                                    display: 'flex', 
                                    flexDirection: 'row' 
                                }} 
                                onPress={() => setRun(true)}>
                                <Ionicons name="play-circle" size={20} color={'white'} />
                                <Text style={{ textAlign: 'center', marginLeft: 5, color: 'white' }}>Run</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    {run && example.output && (
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ fontWeight: 'bold' }}>Output</Text>
                            <View style={{ backgroundColor: 'black', padding: 20, borderRadius: 10, marginTop: 10 }}>
                                <Text style={{ color: 'white' }}>{example.output}</Text>
                            </View>
                        </View>
                    )}
                </View>
            ))}
            <TouchableOpacity
                onPress={() => onClickNext(index)}
                style={{
                    backgroundColor: index + 1 !== chapter.length ? 'lightblue' : 'green',
                    padding: 10,
                    borderRadius: 7,
                    bottom: 0,
                    width: '100%',
                    marginTop: 89
                }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>{index + 1 !== chapter.length ? 'Next' : 'Finish'}</Text>
            </TouchableOpacity>
        </ScrollView>
    )}
/>

        </ScrollView>
    );
}


