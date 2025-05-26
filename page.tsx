'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserCircle } from "lucide-react"
import NameGenerator from "@/components/name-generator"
import ProgressSteps from "@/components/progress-steps"

export default function Home() {
  const [currentStep, setCurrentStep] = useState('basic-info')
  const [formData, setFormData] = useState({
    surname: '',
    gender: '女宝',
    birthDate: '2023-08-15',
    birthTime: '12:00',
    zodiac: '兔',
    namePreferences: {
      characters: 2,
      style: '古风',
    }
  })
  
  const [showResults, setShowResults] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const handlePreferenceChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      namePreferences: {
        ...prev.namePreferences,
        [field]: value
      }
    }))
  }

  const handleNextStep = (nextTab: string) => {
    setCurrentStep(nextTab)
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const handleBack = () => {
    setShowResults(false)
    setCurrentStep('personal')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex flex-col items-center py-8 px-4">
      <header className="mb-6 flex items-center">
        <div className="text-3xl font-bold text-pink-600">启名宝</div>
      </header>
      
      {!showResults ? (
        <>
          <ProgressSteps currentStep={currentStep} />
          
          <Card className="w-full max-w-md shadow-md">
            <CardContent className="pt-6">
              <Tabs value={currentStep} onValueChange={setCurrentStep} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="basic-info">基本信息</TabsTrigger>
                  <TabsTrigger value="birth-info">出生信息</TabsTrigger>
                  <TabsTrigger value="personal">个性化选项</TabsTrigger>
                </TabsList>
                
                <TabsContent value="basic-info">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="surname">宝宝姓氏</Label>
                      <Input 
                        id="surname" 
                        placeholder="请输入宝宝姓氏" 
                        value={formData.surname}
                        onChange={(e) => handleInputChange('surname', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>宝宝性别</Label>
                      <RadioGroup 
                        defaultValue={formData.gender}
                        onValueChange={(value) => handleInputChange('gender', value)}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="男宝" id="male" />
                          <Label htmlFor="male">男宝</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="女宝" id="female" />
                          <Label htmlFor="female">女宝</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        className="w-full bg-green-500 hover:bg-green-600" 
                        onClick={() => handleNextStep('birth-info')}
                      >
                        下一步
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="birth-info">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="birthDate">出生日期</Label>
                      <Input 
                        id="birthDate" 
                        type="date" 
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="birthTime">出生时间</Label>
                      <Input 
                        id="birthTime" 
                        type="time" 
                        value={formData.birthTime}
                        onChange={(e) => handleInputChange('birthTime', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="zodiac">生肖</Label>
                      <Select 
                        value={formData.zodiac} 
                        onValueChange={(value) => handleInputChange('zodiac', value)}
                      >
                        <SelectTrigger id="zodiac">
                          <SelectValue placeholder="选择生肖" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="鼠">鼠</SelectItem>
                          <SelectItem value="牛">牛</SelectItem>
                          <SelectItem value="虎">虎</SelectItem>
                          <SelectItem value="兔">兔</SelectItem>
                          <SelectItem value="龙">龙</SelectItem>
                          <SelectItem value="蛇">蛇</SelectItem>
                          <SelectItem value="马">马</SelectItem>
                          <SelectItem value="羊">羊</SelectItem>
                          <SelectItem value="猴">猴</SelectItem>
                          <SelectItem value="鸡">鸡</SelectItem>
                          <SelectItem value="狗">狗</SelectItem>
                          <SelectItem value="猪">猪</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="outline" 
                        className="w-1/2" 
                        onClick={() => handleNextStep('basic-info')}
                      >
                        返回
                      </Button>
                      <Button 
                        className="w-1/2 bg-green-500 hover:bg-green-600" 
                        onClick={() => handleNextStep('personal')}
                      >
                        下一步
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="personal">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="characters">字数偏好</Label>
                      <Select 
                        value={formData.namePreferences.characters.toString()} 
                        onValueChange={(value) => handlePreferenceChange('characters', parseInt(value))}
                      >
                        <SelectTrigger id="characters">
                          <SelectValue placeholder="选择字数" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">单字(1个字)</SelectItem>
                          <SelectItem value="2">双字(2个字)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="style">字义偏好</Label>
                      <Select 
                        value={formData.namePreferences.style} 
                        onValueChange={(value) => handlePreferenceChange('style', value)}
                      >
                        <SelectTrigger id="style">
                          <SelectValue placeholder="选择风格" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="古风">古风诗意</SelectItem>
                          <SelectItem value="现代">现代简约</SelectItem>
                          <SelectItem value="优雅">优雅大方</SelectItem>
                          <SelectItem value="独特">独特个性</SelectItem>
                          <SelectItem value="平凡">平凡好记</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="outline" 
                        className="w-1/2" 
                        onClick={() => handleNextStep('birth-info')}
                      >
                        返回
                      </Button>
                      <Button 
                        className="w-1/2 bg-green-500 hover:bg-green-600" 
                        onClick={handleSubmit}
                      >
                        开始智能取名
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </>
      ) : (
        <NameGenerator formData={formData} onBack={handleBack} />
      )}

      <footer className="mt-10 text-center text-gray-500 text-sm">
        <p>启名宝 © {new Date().getFullYear()} - 智能起名系统</p>
        <p className="mt-1">本工具仅供参考，建议结合专业命理师意见</p>
      </footer>
    </main>
  )
}