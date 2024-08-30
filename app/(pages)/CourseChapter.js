import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
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
    let chapterRef;

    useEffect(() => {
        setProgress(0);
        if (param.courseContent) {
            setChapter([param.courseContent]);
        }
    }, [param.courseContent]);

    const onClickNext = (index) => {
        setRun(false);
        if (index + 1 < chapter.length) {
            setProgress((index + 1) / chapter.length);
            chapterRef.scrollToIndex({ animated: true, index: index + 1 });
        } else {
            // Navigate to the CongratulationScreen when the last chapter is completed
            navigation.navigate('CongratulationScreen');
        }
    };

    return (
        <View style={{ padding: 20, paddingTop: 50, flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>
            {/* <ProgressBar progress={progress} /> */}
            <FlatList
                data={chapter}
                horizontal={true}
                pagingEnabled
                ref={(ref) => {
                    chapterRef = ref;
                }}
                renderItem={({ item, index }) => (
                    <View style={{ width: Dimensions.get('screen').width * 0.85, marginRight: 15, padding: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.text}</Text>
                        <Text>{item.description}</Text>
                        {item.input && item.input !== '' ? (
                            <View>
                                <View
                                    style={{
                                        backgroundColor: 'black',
                                        padding: 20,
                                        borderRadius: 10,
                                        marginTop: 20,
                                    }}
                                >
                                    <Text style={{ color: 'white' }}>{item.input}</Text>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: 'blue',
                                        width: 60,
                                        padding: 5,
                                        borderRadius: 5,
                                        marginTop: 18,
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                    onPress={() => setRun(true)}
                                >
                                    <Ionicons name="play-circle" size={20} color="white" />
                                    <Text style={{ textAlign: 'center', marginLeft: 5, color: 'white' }}>Run</Text>
                                </TouchableOpacity>
                            </View>
                        ) : null}
                        {run && item.output && (
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ fontWeight: 'bold' }}>Output</Text>
                                <View
                                    style={{
                                        backgroundColor: 'black',
                                        padding: 20,
                                        borderRadius: 10,
                                        marginTop: 10,
                                    }}
                                >
                                    <Text style={{ color: 'white' }}>{item.output}</Text>
                                </View>
                            </View>
                        )}
                        {index + 1 !== chapter.length ? (
                            <TouchableOpacity
                                onPress={() => onClickNext(index)}
                                style={{
                                    backgroundColor: 'blue',
                                    padding: 10,
                                    borderRadius: 7,
                                    bottom: 0,
                                    width: '110%',
                                }}
                            >
                                <Text style={{ textAlign: 'center', color: 'white' }}>Next</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={() => onClickNext(index)}
                                style={{
                                    backgroundColor: 'green',
                                    padding: 10,
                                    borderRadius: 7,
                                    width: '100%',
                                    marginTop: '30%',
                                }}
                            >
                                <Text style={{ textAlign: 'center', color: 'white' }}>Finish</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            />
        </View>
    );
}
