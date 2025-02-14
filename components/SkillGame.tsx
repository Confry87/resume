"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Brain, Users, TrendingUp, Target, Lock } from 'lucide-react'

interface Skill {
  id: number
  icon: JSX.Element
  name: string
  type: 'code' | 'brain' | 'team' | 'business'
  description: string
  color: string
}

interface GridCell {
  filled: boolean
  skillType?: string
  isObstacle?: boolean
  requiredSkill?: string
  isGoal?: boolean
  isPath?: boolean
}

export default function SkillGame(): JSX.Element {
  const [gameStatus, setGameStatus] = useState<'idle' | 'playing' | 'won'>('idle')
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [grid, setGrid] = useState<GridCell[][]>(generateInitialGrid())
  
  function generateInitialGrid(): GridCell[][] {
    const emptyGrid = Array(5).fill(null).map(() => 
      Array(7).fill(null).map(() => ({ filled: false }))
    )
    
    // Add predefined path
    const pathCells = [
      [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5]
    ]
    
    pathCells.forEach(([row, col]) => {
      emptyGrid[row][col] = { filled: false, isPath: true }
    })
    
    // Add obstacles on the path
    emptyGrid[2][1] = { filled: true, isObstacle: true, requiredSkill: 'code', isPath: true }
    emptyGrid[2][2] = { filled: true, isObstacle: true, requiredSkill: 'brain', isPath: true }
    emptyGrid[2][3] = { filled: true, isObstacle: true, requiredSkill: 'team', isPath: true }
    emptyGrid[2][4] = { filled: true, isObstacle: true, requiredSkill: 'business', isPath: true }
    
    // Add goal at the end of path
    emptyGrid[2][6] = { filled: true, isGoal: true }
    
    return emptyGrid
  }

  const skills: Skill[] = [
    { 
      id: 1, 
      icon: <Code2 className="w-6 h-6" />, 
      name: "Coding",
      type: 'code',
      description: "Use coding to bypass technical obstacles",
      color: 'text-blue-500'
    },
    { 
      id: 2, 
      icon: <Brain className="w-6 h-6" />, 
      name: "Problem Solving",
      type: 'brain',
      description: "Solve complex challenges",
      color: 'text-purple-500'
    },
    { 
      id: 3, 
      icon: <Users className="w-6 h-6" />, 
      name: "Team Leading",
      type: 'team',
      description: "Coordinate team efforts",
      color: 'text-green-500'
    },
    { 
      id: 4, 
      icon: <TrendingUp className="w-6 h-6" />, 
      name: "Business Growth",
      type: 'business',
      description: "Navigate business challenges",
      color: 'text-red-500'
    },
  ]

  const handleCellClick = (row: number, col: number) => {
    if (!selectedSkill || gameStatus !== 'playing') return
    
    const cell = grid[row][col]
    if (!cell.isPath || cell.isObstacle || cell.isGoal) return

    const newGrid = [...grid]
    newGrid[row][col] = { ...cell, filled: true, skillType: selectedSkill }
    setGrid(newGrid)

    checkWinCondition(newGrid)
  }

  const checkWinCondition = (currentGrid: GridCell[][]) => {
    // Check if all path cells are filled
    const allPathFilled = currentGrid[2].slice(0, 6).every(cell => 
      cell.filled || (cell.isObstacle && cell.requiredSkill === selectedSkill)
    )
    
    if (allPathFilled) {
      setGameStatus('won')
    }
  }

  const startGame = () => {
    setGameStatus('playing')
    setGrid(generateInitialGrid())
    setSelectedSkill(null)
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold mb-2">Build Your Path to Success</h3>
          {gameStatus === 'idle' && (
            <button 
              onClick={startGame}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Start Building
            </button>
          )}
          {gameStatus === 'won' && (
            <div className="text-green-500 font-bold">Success Achieved! 🎉</div>
          )}
        </div>
        
        {gameStatus !== 'idle' && (
          <>
            <div className="flex justify-center gap-4 mb-8">
              {skills.map(skill => (
                <motion.button
                  key={skill.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedSkill(skill.type)}
                  className={`flex flex-col items-center p-3 rounded-lg transition-all min-w-[100px] ${
                    selectedSkill === skill.type
                      ? 'bg-blue-50 ring-2 ring-blue-500'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  title={skill.description}
                >
                  <div className={`${skill.color} mb-1`}>
                    {skill.icon}
                  </div>
                  <span className={`text-sm font-medium ${skill.color}`}>
                    {skill.name}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2 max-w-2xl mx-auto">
              {grid.map((row, rowIdx) => (
                row.map((cell, colIdx) => (
                  <motion.div
                    key={`${rowIdx}-${colIdx}`}
                    whileHover={cell.isPath && !cell.isObstacle && !cell.isGoal ? { scale: 1.05 } : {}}
                    onClick={() => handleCellClick(rowIdx, colIdx)}
                    className={`
                      w-full aspect-square rounded-lg relative
                      ${cell.isPath ? 'cursor-pointer' : 'cursor-default'}
                      ${cell.isGoal 
                        ? 'bg-green-500' 
                        : cell.isObstacle
                        ? `bg-gray-700`
                        : cell.filled 
                        ? `bg-${cell.skillType === 'code' ? 'blue' : 
                           cell.skillType === 'brain' ? 'purple' :
                           cell.skillType === 'team' ? 'green' :
                           'red'}-500` 
                        : cell.isPath
                        ? 'bg-gray-200 hover:bg-gray-300'
                        : 'bg-transparent'
                      }
                    `}
                  >
                    {cell.isGoal && <Target className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
                    {cell.isObstacle && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Lock className={`w-5 h-5 ${
                          cell.requiredSkill === 'code' ? 'text-blue-300' :
                          cell.requiredSkill === 'brain' ? 'text-purple-300' :
                          cell.requiredSkill === 'team' ? 'text-green-300' :
                          'text-red-300'
                        }`} />
                      </div>
                    )}
                  </motion.div>
                ))
              ))}
            </div>
          </>
        )}
        
        <p className="text-sm text-gray-500 mt-4 text-center">
          Use your skills to unlock the obstacles and reach the goal!
        </p>
      </div>
    </div>
  )
} 