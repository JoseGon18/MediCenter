/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCondition = /* GraphQL */ `
  subscription OnCreateCondition($owner: String) {
    onCreateCondition(owner: $owner) {
      conditionId
      name
      details
      diagnosisDate
      diagnosingDoctor
      hospitalCenter
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCondition = /* GraphQL */ `
  subscription OnUpdateCondition($owner: String) {
    onUpdateCondition(owner: $owner) {
      conditionId
      name
      details
      diagnosisDate
      diagnosingDoctor
      hospitalCenter
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCondition = /* GraphQL */ `
  subscription OnDeleteCondition($owner: String) {
    onDeleteCondition(owner: $owner) {
      conditionId
      name
      details
      diagnosisDate
      diagnosingDoctor
      hospitalCenter
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient($owner: String) {
    onCreatePatient(owner: $owner) {
      id
      ssn
      firstName
      lastName
      hasPiercings
      bloodType
      gender
      sex
      birthDate
      hasConditions {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      hasMedications {
        medicationId
        name
        type
        manufacturer
        dosage
        current
        hasProvider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        dateOfPrescription
        id
        createdAt
        updatedAt
        owner
      }
      hasAllergies {
        allergyId
        name
        diagnosisDate
        id
        createdAt
        updatedAt
        owner
      }
      hasSurgeries {
        surgeryId
        name
        date
        provider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      hasProviders {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      hasFamily {
        familyId
        hasConditions {
          conditionId
          name
          details
          diagnosisDate
          diagnosingDoctor
          hospitalCenter
          id
          createdAt
          updatedAt
          owner
        }
        firstName
        lastName
        birthDate
        id
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient($owner: String) {
    onUpdatePatient(owner: $owner) {
      id
      ssn
      firstName
      lastName
      hasPiercings
      bloodType
      gender
      sex
      birthDate
      hasConditions {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      hasMedications {
        medicationId
        name
        type
        manufacturer
        dosage
        current
        hasProvider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        dateOfPrescription
        id
        createdAt
        updatedAt
        owner
      }
      hasAllergies {
        allergyId
        name
        diagnosisDate
        id
        createdAt
        updatedAt
        owner
      }
      hasSurgeries {
        surgeryId
        name
        date
        provider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      hasProviders {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      hasFamily {
        familyId
        hasConditions {
          conditionId
          name
          details
          diagnosisDate
          diagnosingDoctor
          hospitalCenter
          id
          createdAt
          updatedAt
          owner
        }
        firstName
        lastName
        birthDate
        id
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient($owner: String) {
    onDeletePatient(owner: $owner) {
      id
      ssn
      firstName
      lastName
      hasPiercings
      bloodType
      gender
      sex
      birthDate
      hasConditions {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      hasMedications {
        medicationId
        name
        type
        manufacturer
        dosage
        current
        hasProvider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        dateOfPrescription
        id
        createdAt
        updatedAt
        owner
      }
      hasAllergies {
        allergyId
        name
        diagnosisDate
        id
        createdAt
        updatedAt
        owner
      }
      hasSurgeries {
        surgeryId
        name
        date
        provider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      hasProviders {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      hasFamily {
        familyId
        hasConditions {
          conditionId
          name
          details
          diagnosisDate
          diagnosingDoctor
          hospitalCenter
          id
          createdAt
          updatedAt
          owner
        }
        firstName
        lastName
        birthDate
        id
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMedication = /* GraphQL */ `
  subscription OnCreateMedication($owner: String) {
    onCreateMedication(owner: $owner) {
      medicationId
      name
      type
      manufacturer
      dosage
      current
      hasProvider {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      dateOfPrescription
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateMedication = /* GraphQL */ `
  subscription OnUpdateMedication($owner: String) {
    onUpdateMedication(owner: $owner) {
      medicationId
      name
      type
      manufacturer
      dosage
      current
      hasProvider {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      dateOfPrescription
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteMedication = /* GraphQL */ `
  subscription OnDeleteMedication($owner: String) {
    onDeleteMedication(owner: $owner) {
      medicationId
      name
      type
      manufacturer
      dosage
      current
      hasProvider {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      dateOfPrescription
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAllergy = /* GraphQL */ `
  subscription OnCreateAllergy($owner: String) {
    onCreateAllergy(owner: $owner) {
      allergyId
      name
      diagnosisDate
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAllergy = /* GraphQL */ `
  subscription OnUpdateAllergy($owner: String) {
    onUpdateAllergy(owner: $owner) {
      allergyId
      name
      diagnosisDate
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAllergy = /* GraphQL */ `
  subscription OnDeleteAllergy($owner: String) {
    onDeleteAllergy(owner: $owner) {
      allergyId
      name
      diagnosisDate
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSurgery = /* GraphQL */ `
  subscription OnCreateSurgery($owner: String) {
    onCreateSurgery(owner: $owner) {
      surgeryId
      name
      date
      provider {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSurgery = /* GraphQL */ `
  subscription OnUpdateSurgery($owner: String) {
    onUpdateSurgery(owner: $owner) {
      surgeryId
      name
      date
      provider {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSurgery = /* GraphQL */ `
  subscription OnDeleteSurgery($owner: String) {
    onDeleteSurgery(owner: $owner) {
      surgeryId
      name
      date
      provider {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateProvider = /* GraphQL */ `
  subscription OnCreateProvider($owner: String) {
    onCreateProvider(owner: $owner) {
      providerId
      name
      hospitalOffice {
        healthLocId
        name
        address {
          street
          city
          state
          zipcode
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      specialty
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProvider = /* GraphQL */ `
  subscription OnUpdateProvider($owner: String) {
    onUpdateProvider(owner: $owner) {
      providerId
      name
      hospitalOffice {
        healthLocId
        name
        address {
          street
          city
          state
          zipcode
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      specialty
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProvider = /* GraphQL */ `
  subscription OnDeleteProvider($owner: String) {
    onDeleteProvider(owner: $owner) {
      providerId
      name
      hospitalOffice {
        healthLocId
        name
        address {
          street
          city
          state
          zipcode
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      specialty
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateHealthcareLoc = /* GraphQL */ `
  subscription OnCreateHealthcareLoc($owner: String) {
    onCreateHealthcareLoc(owner: $owner) {
      healthLocId
      name
      address {
        street
        city
        state
        zipcode
        id
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateHealthcareLoc = /* GraphQL */ `
  subscription OnUpdateHealthcareLoc($owner: String) {
    onUpdateHealthcareLoc(owner: $owner) {
      healthLocId
      name
      address {
        street
        city
        state
        zipcode
        id
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteHealthcareLoc = /* GraphQL */ `
  subscription OnDeleteHealthcareLoc($owner: String) {
    onDeleteHealthcareLoc(owner: $owner) {
      healthLocId
      name
      address {
        street
        city
        state
        zipcode
        id
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($owner: String) {
    onCreateAddress(owner: $owner) {
      street
      city
      state
      zipcode
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($owner: String) {
    onUpdateAddress(owner: $owner) {
      street
      city
      state
      zipcode
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($owner: String) {
    onDeleteAddress(owner: $owner) {
      street
      city
      state
      zipcode
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateFamilyMember = /* GraphQL */ `
  subscription OnCreateFamilyMember($owner: String) {
    onCreateFamilyMember(owner: $owner) {
      familyId
      hasConditions {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      firstName
      lastName
      birthDate
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFamilyMember = /* GraphQL */ `
  subscription OnUpdateFamilyMember($owner: String) {
    onUpdateFamilyMember(owner: $owner) {
      familyId
      hasConditions {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      firstName
      lastName
      birthDate
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFamilyMember = /* GraphQL */ `
  subscription OnDeleteFamilyMember($owner: String) {
    onDeleteFamilyMember(owner: $owner) {
      familyId
      hasConditions {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      firstName
      lastName
      birthDate
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
