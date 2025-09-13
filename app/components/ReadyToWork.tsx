// 'use client'
// import { useState } from 'react'
// import { useChat, UseChatHelpers } from '@ai-sdk/react'

// // Define the type for a chat message
// type ChatMessage = {
//   id: string
//   role: 'user' | 'assistant'
//   content: string
// }

// export default function ReadyToWork() {
//   const [open, setOpen] = useState(false)
//   const [input, setInput] = useState('')

//   // ✅ Properly typed useChat
//   const { messages, append, isLoading }: UseChatHelpers<ChatMessage> = useChat({
//     api: '/api/chat', // your route handler
//   })

//   const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     if (!input.trim()) return
//     await append({ role: 'user', content: input })
//     setInput('')
//   }

//   return (
//     <div className="text-center mt-20">
//       <div
//         onClick={() => setOpen(true)}
//         className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-md border border-teal-200 rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
//       >
//         <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
//         <span className="text-slate-700 font-medium">
//           Ready to work together?
//         </span>
//         <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//           <svg
//             className="w-4 h-4 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//             />
//           </svg>
//         </div>
//       </div>

//       {open && (
//         <div className="fixed bottom-6 right-6 w-80 bg-white rounded-xl shadow-xl p-4 flex flex-col">
//           <button
//             onClick={() => setOpen(false)}
//             className="self-end text-gray-400 hover:text-gray-600 mb-2"
//           >
//             ✕
//           </button>

//           <div className="flex-1 overflow-y-auto mb-2 space-y-2">
//             {messages.map((m) => (
//               <div
//                 key={m.id}
//                 className={m.role === 'user' ? 'text-right' : 'text-left'}
//               >
//                 <span className="inline-block px-3 py-1 rounded-lg bg-gray-100">
//                   {m.content}
//                 </span>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="text-left text-gray-400">…thinking</div>
//             )}
//           </div>

//           <form onSubmit={sendMessage} className="flex gap-2">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               className="flex-1 border rounded px-2 py-1 text-sm"
//               placeholder="Type a message…"
//             />
//             <button
//               type="submit"
//               className="bg-teal-500 text-white px-3 py-1 rounded text-sm"
//               disabled={isLoading}
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   )
// }
