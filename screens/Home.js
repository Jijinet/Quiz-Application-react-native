import { View, Text,StyleSheet,Image } from "react-native";
import React,{useState,useRef,useEffect} from "react";
import CheckBoxInput from '../components/CheckBox';
import FormButton from "../components/Button";
import data from "../data/data.json";

const Home = () => {


    const [answersId, setAnswersId] = useState(1);
    const [checked,setChecked]=useState();
    const [score,setScore]=useState(0);
    const [error,setError]=useState('');
   
const total=data.length*10;
const question=data.find((x)=> x.id===answersId);



const handleResult= ()=>{
  setChecked(null);
  if(checked==null){
    setError('you have to check atleast one answer')
    
  }
  else{
    setAnswersId(answersId+1)
    setError('');
  }
  
}

const resetQuiz=()=>{
  setScore(0);
  setChecked(null);
  setAnswersId(1)
}


console.log(score)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.img}
            source={require('../assets/images/user.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textUser}>Hi, username</Text>
            <Text style={styles.textDesc}>Est non incididunt nisi minim</Text>
          </View>
        </View>
      </View>
      {
        answersId<=data.length
        ?
        <>
      <View style={styles.subHeader}>
        <View style={styles.subHeaderContent}>
          <View style={styles.contentContainer}>
            <Text style={styles.textTitle}>Questions</Text>
            <View style={styles.content}>
              <Text style={styles.textContent}>
                {answersId}/{data.length}
              </Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.textTitle}>Temps écouté</Text>
            <View style={styles.contentContent}>
              <View style={styles.content}>
                <Text style={styles.textContent}>{question.time}</Text>
              </View>
              <View style={styles.content}>
                <Text style={{...styles.textContent, ...{color: 'salmon'}}}>
                  00
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.quizContainer}>
        <View>
          
         
          <>
          <View style={styles.question}>
            <Text style={{...styles.textTitle, ...{fontSize: 18}}}>
              Question {question.id}
            </Text>
            <Text style={{...styles.textDesc,...{fontSize:25}}}>
              {question.label}
            </Text>
          </View>
          <View style={styles.answersContainer}>
          {question.answers.map(label => {
            return ( 
            <CheckBoxInput
              text={label.label}
              onClick={() => {label.correct ? setScore(score+10) : score ,setChecked(checked === label ? null : label) }}
              isChecked={checked===label}
            
            />
            );
          })}
          </View>
          {<Text style={{...styles.textDesc,...{color:'red',fontSize:18}}}>{error}</Text>}
          </>
        

          
        </View>
        <View>
          <FormButton title="Suivant" onPress={handleResult} />
        </View>
      </View>
      </>
      :

      <View style={{...styles.subHeader,...{position:'relative',height:'30%',justifyContent:'space-around',paddingVertical:10}}}>
        <Text style={{...styles.textDesc,...{fontSize:18,alignSelf:'center'}}}>Félicitation</Text>
        <Text style={{...styles.textDesc,...{fontSize:18,alignSelf:'center'}}}>Voici votre Score</Text>
        <View style={styles.content}>
                <Text style={styles.textContent}>{score}/{total}</Text>
        </View>
        <FormButton title="Refaire le test" onPress={resetQuiz} />
      </View>
      }
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    height: '25%',
    width: '100%',
    backgroundColor: 'deepskyblue',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  subHeader: {
    height: '12%',
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: '18%',
    elevation: 10,
  },
  headerContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    width: '90%',
    height: '100%',
  },
  img: {
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginTop:20,
    height: 50,
    width: 50,
  },
  textContainer: {
    alignSelf: 'center',
  },
  textUser: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textDesc: {
    fontSize: 15,
    color: 'black',
  },
  subHeaderContent: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  textTitle: {
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    backgroundColor: 'lightskyblue',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
  },
  textContent: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkblue',
  },
  contentContent:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  quizContainer:{
    alignSelf:'center',
    justifyContent:'space-around',
    height:'75%',
    width:'90%',
  }
});

export default Home;
