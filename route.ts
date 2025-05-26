import { NextRequest, NextResponse } from 'next/server'
import { generateBabyNames, type BabyInfo } from '@/lib/deepseek-api'

// 告诉Next.js这是一个动态路由
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const babyInfo: BabyInfo = await request.json()
    
    // 验证必要字段
    if (!babyInfo.surname || !babyInfo.gender) {
      return NextResponse.json(
        { error: '请填写完整的宝宝信息' },
        { status: 400 }
      )
    }

    // 调用 DeepSeek API 生成名字
    const names = await generateBabyNames(babyInfo)
    
    return NextResponse.json({ 
      success: true,
      names 
    })
    
  } catch (error) {
    console.error('生成名字失败:', error)
    
    // 确保总是返回JSON格式的错误信息
    const errorMessage = error instanceof Error ? error.message : '生成名字失败，请稍后重试'
    
    return NextResponse.json(
      { 
        success: false,
        error: errorMessage,
        names: [] 
      },
      { status: 200 } // 改为200状态码，避免被当作HTML错误页面
    )
  }
} 