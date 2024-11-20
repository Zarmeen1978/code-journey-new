import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function CourseChapter() {
  const navigation = useNavigation();
  const param = useRoute().params;
  const [chapter, setChapter] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [run, setRun] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [progress, setProgress] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [retrying, setRetrying] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [points, setPoints] = useState(0);
  const [finish, setFinished] = useState(false);

  const handleSelect = (optionKey) => {
    // Update the selected option
    setSelectedOption(optionKey);
  };
  let chapterRef;
  let QuizRef;

  useEffect(() => {
    setProgress(0);
    if (param.courseContent) {
      setChapter(param.courseContent.lessons);
      setQuiz(param.courseContent.quiz);
    }
  }, [param.courseContent]);

  const onClickNext = (index) => {
    setRun(false);
    if (index + 1 < chapter.length) {
      setProgress((index + 1) / chapter.length);
      chapterRef.scrollToIndex({ animated: true, index: index + 1 });
    } else {
      // Navigate to the CongratulationScreen when the last chapter is completed
      setShowQuiz(true);
      // navigation.navigate("CongratulationScreen");
    }
  };

  useEffect(() => {
    if (finish) {
      if (wrongAnswers.length > 0) {
        // Set quiz to wrongAnswers and reset progress
        setQuiz(wrongAnswers);
        setWrongAnswers([]);
        QuizRef.scrollToIndex({ animated: false, index: 0 });
        setRetrying(true);
        setFinished(false);
      } else {
        // Navigate to the CongratulationScreen when no wrong answers
        navigation.navigate("CongratulationScreen", {
          points: points,
          courseData: param.courseData,
        });
      }
    }
  }, [finish]);

  const onClickNextQuiz = (index, item) => {
    if (selectedOption) {
      const isCorrect = item.correct === selectedOption;

      // Update points if correct, add to wrongAnswers if incorrect
      if (isCorrect) {
        setPoints((prev) => prev + item.points);
      } else {
        setWrongAnswers((prev) => [...prev, item]);
        setModalMessage(
          "Wrong answer! You can Continue to next Question but You would need to answer the questions that were marked as wrong"
        );
        setModalVisible(true);
      }

      // Reset selected option
      setSelectedOption(null);

      // Move to next question or check finish
      if (index + 1 < quiz.length) {
        QuizRef.scrollToIndex({ animated: true, index: index + 1 });
      } else {
        setFinished(true);
      }
    }
  };

  useEffect(() => {
    if (showQuiz && quiz.length > 0) {
      QuizRef.scrollToIndex({ animated: false, index: 0 });
    }
  }, [showQuiz]);

  return (
    <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 50 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>

      {showQuiz ? (
        <FlatList
          data={quiz}
          horizontal={true}
          pagingEnabled
          ref={(ref) => {
            QuizRef = ref;
          }}
          renderItem={({ item, index }) => {
            console.log(index);
            return (
              <View
                style={{
                  width: Dimensions.get("screen").width * 0.85,
                  marginRight: 15,
                  padding: 10,
                }}
              >
                {retrying && (
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", color: "red" }}
                  >
                    Previously, you answer was wrong
                  </Text>
                )}
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {item.question}
                </Text>
                {["option1", "option2", "option3", "option4"].map(
                  (optionKey) => (
                    <BouncyCheckbox
                      key={optionKey}
                      size={25}
                      fillColor="green"
                      unfillColor="#FFFFFF"
                      text={item[optionKey]}
                      textStyle={{
                        textDecorationLine: "none",
                        fontSize: 16,
                        color: "black",
                      }}
                      isChecked={selectedOption === optionKey}
                      onPress={() => handleSelect(optionKey)}
                      disableBuiltInState
                      style={{ marginVertical: 10 }}
                    />
                  )
                )}
                {index + 1 !== quiz.length ? (
                  <TouchableOpacity
                    onPress={() => onClickNextQuiz(index, item)}
                    style={{
                      backgroundColor: "blue",
                      padding: 10,
                      borderRadius: 7,
                      bottom: 0,
                      marginTop: "30%",
                      width: "100%",
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      Next
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => onClickNextQuiz(index, item)}
                    style={{
                      backgroundColor: "green",
                      padding: 10,
                      borderRadius: 7,
                      width: "100%",
                      marginTop: "30%",
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      Finish
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        />
      ) : (
        <FlatList
          data={chapter}
          horizontal={true}
          pagingEnabled
          ref={(ref) => {
            chapterRef = ref;
          }}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: Dimensions.get("screen").width * 0.85,
                marginRight: 15,
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text>{item.content}</Text>
              {item.input && item.input !== "" ? (
                <View>
                  <View
                    style={{
                      backgroundColor: "black",
                      padding: 20,
                      borderRadius: 10,
                      marginTop: 20,
                    }}
                  >
                    <Text style={{ color: "white" }}>{item.input}</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "blue",
                      width: 60,
                      padding: 5,
                      borderRadius: 5,
                      marginTop: 18,
                      display: "flex",
                      flexDirection: "row",
                    }}
                    onPress={() => setRun(true)}
                  >
                    <Ionicons name="play-circle" size={20} color="white" />
                    <Text
                      style={{
                        textAlign: "center",
                        marginLeft: 5,
                        color: "white",
                      }}
                    >
                      Run
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}
              {run && item.output && (
                <View style={{ marginTop: 15 }}>
                  <Text style={{ fontWeight: "bold" }}>Output</Text>
                  <View
                    style={{
                      backgroundColor: "black",
                      padding: 20,
                      borderRadius: 10,
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ color: "white" }}>{item.output}</Text>
                  </View>
                </View>
              )}
              {index + 1 !== chapter.length ? (
                <TouchableOpacity
                  onPress={() => onClickNext(index)}
                  style={{
                    backgroundColor: "blue",
                    padding: 10,
                    borderRadius: 7,
                    bottom: 0,
                    marginTop: "30%",
                    width: "100%",
                  }}
                >
                  <Text style={{ textAlign: "center", color: "white" }}>
                    Next
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => onClickNext(index)}
                  style={{
                    backgroundColor: "green",
                    padding: 10,
                    borderRadius: 7,
                    width: "100%",
                    marginTop: "30%",
                  }}
                >
                  <Text style={{ textAlign: "center", color: "white" }}>
                    Finish
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        />
      )}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
            >
              Oops!
            </Text>
            <Text
              style={{ fontSize: 16, textAlign: "center", marginBottom: 20 }}
            >
              {modalMessage}
            </Text>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                backgroundColor: "red",
                padding: 10,
                borderRadius: 5,
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
