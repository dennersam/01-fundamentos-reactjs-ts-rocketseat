import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/dennersam.png',
      name: 'Denner Cerqueira',
      role: 'Full Stack Developer'
      
      },
      content: [
        { type: 'paragraph', content: 'Fala galera!!!!'},
        { type: 'paragraph', content: 'Subimos mais conteudo da Rocketseat para vocês, tudo o que você precisa saber mais e mais sobre Backend e Frontend, se liga la!!!'},
        { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2024-06-11 21:49:23'),
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/welissonArley.png',
      name: 'Welisson Arley',
      role: 'Backend Developer'
      
      },
      content: [
        { type: 'paragraph', content: 'Olá pessoal!!!!'},
        { type: 'paragraph', content: 'Acabamos de adicionar mais aulas de .NET no nosso curso de C# e ASP.NET, confira lá no dashboard as novas atualizações e aproveitem o conteúdo que tem temas como Entity framework, DDD e muito mais!!!'},
        { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-06-30 21:49:23'),
  },
  {
    id:3,
    author: {
      avatarUrl: 'https://github.com/filipedeschamps.png',
      name: 'Filipe Deschamps',
      role: 'FullStack Developer'
      
      },
      content: [
        { type: 'paragraph', content: 'E ai pessoal!!!!'},
        { type: 'paragraph', content: 'Essa plataforma esta muito maneira, consegui aprender muitos conceitos interessantes sobre arquitetura e muito mais, uma delicinha!!!'},
        { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2022-01-15 09:49:20'),
  },
  {
    id:4,
    author: {
      avatarUrl: 'https://github.com/canelada.png',
      name: 'Matheus Leopardi Mello Canelada Campos',
      role: 'Frontend Developer'
      
      },
      content: [
        { type: 'paragraph', content: 'Fala ae piazada!!!!'},
        { type: 'paragraph', content: 'Famos fazer uma aplicação do zero? Tenho uma idéia de desenvolver uma plataforma de churrascaria, como sou muito fã, espero vcs!!!'},
        { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2022-01-15 09:49:20'),
  },
];

export function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
      
    </>
  )
}
