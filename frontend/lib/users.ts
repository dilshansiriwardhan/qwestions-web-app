import prisma from '@/lib/prisma'
import { User } from '@prisma/client'

export async function createUser(data: any) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/user`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      console.log('Data saved successfully!');
    } else {
      const errorDetails = await response.text();
      console.error(
        `Failed to save data! Status: ${response.status}, Response: ${errorDetails}`
      );
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function getUserById({
  id,
  clerkUserId
}: {
  id?: string
  clerkUserId?: string
}) {
  try {
    if (!id && !clerkUserId) {
      throw new Error('id or clerkUserId is required')
    }

    const query = id ? { id } : { clerkUserId }

    const user = await prisma.user.findUnique({ where: query })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function UpdateUser(id: string, data: Partial<User>) {
  try {
    const user = await prisma.user.update({
      where: { id },
      data
    })
    return { user }
  } catch (error) {
    return { error }
  }
}